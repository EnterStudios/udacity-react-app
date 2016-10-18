import React, { Component } from 'react';
import ListItem from './ListItem'


export default class List extends Component{
  render(){
	  let courses = this.props.courses.map(data => <ListItem key={data.image} {...data} />);
	  return(
  		<ol>
			  {courses}
		  </ol>
	  )
  }
}