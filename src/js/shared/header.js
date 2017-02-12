import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
export default class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount(){
	}

	render(){
		return (
			<article className='header--article'>
				<h1 className='header--title'>Kendall & Bart</h1>
				<h3 className='header--hashtag text-center'>#GreenWedding</h3>
				<ul className='header--navigation flex flex-row justify-center'>
					<li><Link to={`/Ireland/`}>Wedding</Link></li>
					<li><Link to={`/dc/`}>DC Reception</Link></li>
					<li><Link to={`/stlouis/`}>Registry</Link></li>
				</ul>
			</article>

		);
	}
}
