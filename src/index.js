import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
