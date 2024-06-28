import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import  { robots }  from '../containers/robots';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'
import Scroll from '../components/Scroll';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
	        searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// const filteredRobots = this.state.robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		// console.log(filteredRobots);
	}
	render() {
		const { robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return (
	  <div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		  <ErrorBoundry>
		  <CardList robots = {filteredRobots} />
		  </ErrorBoundry>
	    </Scroll>
	  </div>
	);
  }
}

export default App;