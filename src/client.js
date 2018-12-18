/**
 * Client-side entry point to shared frontend React App
 *
 */
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

import App from './frontend/app';

const data = window.__PRELOADED_STATE__;

hydrate(
  <BrowserRouter>
    <App user={data.user} building={data.building} />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
