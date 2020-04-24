import React from 'react';
import Code from 'components/Code';

export default {
  code: Code,
  p: (props) => <p {...props} />,
  pre: (props) => (
    <div className="pre -mx-x.5 mx-0@sm bg-txt bg-transparent@sm" {...props} />
  ),
  table: (props) => (
    <div className="table of-scroll maxw-100%" {...props}>
      <table>{props.children}</table>
    </div>
  ),
};
