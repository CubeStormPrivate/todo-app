import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter } from "react-router-dom";
import { App } from './components/App';

import './css/tailwind.css';


const root = document.getElementById('root');

root && ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	root
);