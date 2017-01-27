import React from 'react';
import { Match } from 'react-router';

import App from './app';

export default () => (
  <Match pattern="/" component={App} />
);
