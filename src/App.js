import React, { Component } from 'react';
import List from './components/List'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {courses: []}
  }
  componentDidMount(){
    axios.get('https://www.udacity.com/public-api/v0/courses')
      .then(response => this.setState({
      	courses : response.data.courses
      }))
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <List courses={this.state.courses}/>
    );
  }
}

export default App;
