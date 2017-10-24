import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.css';
import './index.css';
import App from '../containers/App/App';
import registerServiceWorker from '../lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
