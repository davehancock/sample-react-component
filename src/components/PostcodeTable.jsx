import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostcodesTable.scss';

const PostcodeTable = ({ postcodes }) => (
  <div>
    <table className={styles.basicTable}>
      <thead>
        <tr>
          <th>#</th>
          <th>Postcode</th>
          <th>Country</th>
          <th>Region</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
      </thead>
      <tbody>
        {postcodes.map((postcodeDetails, index) => (
          <tr key={postcodeDetails.postcode}>
            <th scope="row">{index + 1}</th>
            <td>{postcodeDetails.postcode}</td>
            <td>{postcodeDetails.country}</td>
            <td>{postcodeDetails.region}</td>
            <td>{postcodeDetails.longitude}</td>
            <td>{postcodeDetails.latitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PostcodeTable.propTypes = {
  postcodes: PropTypes.arrayOf(PropTypes.shape({
    postcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  })).isRequired,
};

export default PostcodeTable;
