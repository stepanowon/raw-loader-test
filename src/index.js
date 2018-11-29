import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as txtA from './a.txt';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
console.log(txtA);
