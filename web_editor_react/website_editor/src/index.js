import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import App from './app/App';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();