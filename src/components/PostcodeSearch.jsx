import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostcodesSearch.scss';

const PostcodeSearch = ({ postcodeQuery, handlePostcodeQueryChange }) => (
  <form
    className={styles.basicForm}
    onSubmit={(e) => { e.preventDefault(); }}
  >
    <input
      id="postcodeQuery"
      placeholder="Enter Postcode..."
      className={styles.basicInput}
      type="text"
      value={postcodeQuery}
      onChange={e => handlePostcodeQueryChange(e.target.value)}
    />
  </form>
);

PostcodeSearch.propTypes = {
  postcodeQuery: PropTypes.string,
  handlePostcodeQueryChange: PropTypes.func.isRequired,
};

PostcodeSearch.defaultProps = {
  postcodeQuery: '',
};

export default PostcodeSearch;
