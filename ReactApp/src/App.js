import React, {Component} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

import gameStore from './stores/gameStore';
gameStore.connect();

// Pages
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<h2>React - xo123</h2>
				</div>

				<Router history={hashHistory}>
					<Route path="/" component={StartPage}/>
    				<Route path="/game/:name" component={GamePage}/>
				</Router>
			</div>
		);
	}
}
