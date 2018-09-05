import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'reset.css/reset.css';
import './media/css/main.less';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
