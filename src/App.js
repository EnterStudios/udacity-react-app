import React, { Component } from 'react';
import List from './components/List'
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {courses: []}
  }
  componentDidMount(){
    $.ajax('https://www.udacity.com/public-api/v0/courses')
      .done(data => this.setState({ courses : data.courses}))
      .error(error => console.log(error));
  };
  render() {
    return (
      <List courses={this.state.courses}/>
    );
  }
}

export default App;
