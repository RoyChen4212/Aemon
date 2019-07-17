import React from 'react';

export const withContainer = story => (
  <div className="container-fluid">
    <div className="row">{story()}</div>
  </div>
);

export const withMobileSizing = story => <div className="mobile-size">{story()}</div>;

export const withMiddleSizing = story => <div className="middle-size">{story()}</div>;

export const withGreyContainer = story => (
  <div className="container-fluid h-100 grey">
    <div className="row">{story()}</div>
  </div>
);

export const wrapStory = story => <div className="col-12 story-wrapper">{story()}</div>;
