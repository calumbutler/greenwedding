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
				<header className='header--header flex flex-column justify-between'>

				</header>
				<h1 className='header--title'>Kendall & Bart</h1>
				<h3 className='text-center'>#GreenWedding</h3>
				<ul className='header--navigation flex flex-row justify-center'>
					<li><Link to={`/Ireland/`}>Ireland</Link></li>
					<li><Link to={`/dc/`}>DC</Link></li>
					<li><Link to={`/stlouis/`}>St. Louis</Link></li>
				</ul>
			</article>

		);
	}
}
