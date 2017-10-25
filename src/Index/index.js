import React from 'react';
import { render } from 'react-dom';
import store from '../stores/store';
import { Provider } from 'react-redux';
import App from '../containers/App/App';
import registerServiceWorker from '../lib/registerServiceWorker';
import 'semantic-ui-css/semantic.css';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
