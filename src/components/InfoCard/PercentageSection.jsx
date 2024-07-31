import PropTypes from "prop-types";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";
import { PercentageSectionWrapper, PercentageWrapper, LabelWrapper } from "./style";

function PercentageSection({ label, percentage }) {
  const displayPercentage = useMemo(() => Math.round(percentage), [percentage]);
  const labelId = uuid();
  return (
    <PercentageSectionWrapper>
      <PercentageWrapper
        role="meter"
        aria-valuenow={displayPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={labelId}
      >
        {displayPercentage}%
      </PercentageWrapper>
      <LabelWrapper id={labelId}>{label}</LabelWrapper>
    </PercentageSectionWrapper>
  );
}

PercentageSection.propTypes = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default PercentageSection;
