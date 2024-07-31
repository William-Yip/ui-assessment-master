import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import {
  Wrapper,
  LinesSavedSection,
  SalesCardGrid,
  SalesIconWrapper,
  SalesSection,
  SalesSectionHeader,
  UploadSuccessSection,
} from "./style.js";
import { infoCardPropTypes } from './propTypes';
import PercentageSection from './PercentageSection.jsx';

function InfoCard({ uploads, successfulUploads, linesSaved, linesAttempted }) {
  const uploadsPercentage = useMemo(
    () => (successfulUploads / uploads) * 100,
    [successfulUploads, uploads]
  );

  const linesPercentage = useMemo(
    () => (linesSaved / linesAttempted) * 100,
    [linesSaved, linesAttempted]
  );

  return (
      <Wrapper>
        <SalesCardGrid>
          <SalesSection>
            <SalesSectionHeader>
              <SalesIconWrapper>
                <FontAwesomeIcon
                  icon={faUpload}
                  color='#3fb1ea'
                />
                <h2>Sales</h2>
              </SalesIconWrapper>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  color='#BBBBBB'
                />
            </SalesSectionHeader>
            <p data-testid="lines-upload-paragraph">
              You had <strong>{successfulUploads} uploads</strong> and <strong>{linesSaved}</strong> lines added.
            </p>
          </SalesSection>
          <UploadSuccessSection>
            <PercentageSection
              percentage={uploadsPercentage}
              label="Upload success"
            />
          </UploadSuccessSection>
          <LinesSavedSection>
            <PercentageSection
              percentage={linesPercentage}
              label="Lines Saved"
            />
          </LinesSavedSection>
        </SalesCardGrid>
      </Wrapper>
  );
}

InfoCard.propTypes = infoCardPropTypes

export default InfoCard;
