import React from 'react';

export default props => (
  <React.Fragment>
    <h1>
You&apos;re on the contact page - click another link above
    </h1>
    <h2>
      {props.title}
    </h2>
    <h2>
      {props.subtitle}
    </h2>
  </React.Fragment>
);
