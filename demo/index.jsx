/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import PostcodeContainer from '../src/components/PostcodeContainer';

const postcodes = [
  {
    postcode: 'ST3 5HD',
    region: 'Staffordshire',
    country: 'United Kingdom',
    longitude: 1.1,
    latitude: 1.2,
  },
  {
    postcode: 'ST3 5HY',
    region: 'Staffordshire',
    country: 'United Kingdom',
    longitude: 1.1,
    latitude: 1.2,
  },
];

function DemoPage() {
  return (
    <div>
      <div>
        <h2>Postcode Widget</h2>
        <PostcodeContainer postcodes={postcodes} />
      </div>
    </div>
  );
}

ReactDom.render(
  <DemoPage />, document.getElementById('root'),
);
