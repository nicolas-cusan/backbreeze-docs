/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// require('prismjs/themes/prism-solarizedlight.css');

import React from 'react';
import LayoutWrap from 'components/layout-wrap';

export const wrapPageElement = ({ element, props }) => (
  <LayoutWrap {...props}>{element}</LayoutWrap>
);
