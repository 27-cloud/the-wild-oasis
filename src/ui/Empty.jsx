import PropTypes from "prop-types";

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

export default Empty;

Empty.propTypes = {
  resourceName: PropTypes.any,
};
