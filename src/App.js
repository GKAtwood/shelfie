import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import {Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends Component {
	render() {
		return (
			
				<div className="App">
					<Header />
					<div className="body-content">
						{routes}
					</div>
				</div>
			
		);
	}
}

export default App;




