import React from 'react';
import Code from 'components/Code';

export default {
  code: Code,
  p: (props) => <p {...props} />,
  pre: (props) => (
    <div className="pre -mx-x.5 mx-0@sm bg-txt bg-transparent@sm" {...props} />
  ),
};
