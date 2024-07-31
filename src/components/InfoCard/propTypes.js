import PropTypes from "prop-types"

export const infoCardPropTypes = {
  uploads: PropTypes.number.isRequired,
  successfulUploads: PropTypes.number.isRequired,
  linesAttempted: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};