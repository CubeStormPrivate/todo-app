import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

import './css/App.css';
import './css/tailwind.css';


const root = document.getElementById('root');

root && ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	root
);