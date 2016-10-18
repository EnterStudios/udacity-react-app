import React, { Component } from 'react';

export default class ListItem extends Component{
	render(){
		return(
			<li><a href={this.props.homepage} target="_blank">{this.props.title}  </a></li>
		)
	}
}