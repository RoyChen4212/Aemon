import React from 'react';

export const withContainer = story => (
  <div className="container-fluid">
    <div className="row">
      {story()}
    </div>
  </div>
);

export const wrapStory = story => (
  <div className="col-12 story-wrapper">{story()}</div>
);

