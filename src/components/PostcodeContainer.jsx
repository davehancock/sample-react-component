import React from 'react';
import PropTypes from 'prop-types';
import PostcodeSearch from './PostcodeSearch';
import PostcodeTable from './PostcodeTable';

import styles from './PostcodeContainer.scss';

function filterPostcodes(postcodeQuery, postcodes) {
  return postcodes.filter(p => !postcodeQuery
        || p.postcode.toUpperCase().includes(postcodeQuery.toUpperCase()));
}

class PostcodeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePostcodeSearchChange = this.handlePostcodeSearchChange.bind(this);
    this.state = {
      postcodeQuery: props.postcodeQuery,
      postcodes: props.postcodes,
    };
  }

  handlePostcodeSearchChange(postcodeQuery) {
    this.setState({ postcodeQuery });
  }

  render() {
    const { postcodeQuery, postcodes } = { ...this.state };
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <PostcodeSearch
            postcodeQuery={postcodeQuery}
            handlePostcodeQueryChange={this.handlePostcodeSearchChange}
          />
        </div>
        <div className={styles.row}>
          <PostcodeTable postcodes={filterPostcodes(postcodeQuery, postcodes)} />
        </div>
      </div>
    );
  }
}

PostcodeContainer.propTypes = {
  postcodes: PropTypes.arrayOf(PropTypes.shape({
    postcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  })).isRequired,
  postcodeQuery: PropTypes.string,
};

PostcodeContainer.defaultProps = {
  postcodeQuery: '',
};

export default PostcodeContainer;
