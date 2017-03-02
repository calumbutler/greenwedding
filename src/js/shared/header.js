import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

//document.getElementById('content').classList.add('overflow-hidden');

export default class Header extends React.Component {


	constructor (props) {
		super(props);
	}

	componentDidMount(){
	}

	render(){
		return (
			<article className='header--article'>
				<img src='images/wedding.gif' />
			</article>

		);
	}
}
