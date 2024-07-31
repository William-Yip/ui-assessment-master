import PropTypes from "prop-types";
import { Wrapper, AccountOverviewWrapper } from "./style";
import SupportSection from 'components/SupportSection';
import { supportSectionPropTypes } from 'components/SupportSection/propType';
import { infoCardPropTypes } from 'components/InfoCard/propTypes';
import InfoCard from 'components/InfoCard';

function AccountOverviewPage({ data: { supportContact, salesOverview } }) {
  return (
    <Wrapper>
      <AccountOverviewWrapper>
        <h1>Account Overview</h1>
        <SupportSection
          email={supportContact.email}
          name={supportContact.name}
          phone={supportContact.phone}
        />
      </AccountOverviewWrapper>
      <InfoCard
        linesAttempted={salesOverview.linesAttempted}
        linesSaved={salesOverview.linesSaved}
        successfulUploads={salesOverview.successfulUploads}
        uploads={salesOverview.uploads}
      />
    </Wrapper>
  );
}

AccountOverviewPage.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape(supportSectionPropTypes).isRequired,
    salesOverview: PropTypes.shape(infoCardPropTypes).isRequired,
  }).isRequired,
};

export default AccountOverviewPage;
