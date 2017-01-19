import React from 'react';

export default class Footer extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount(){

	}

	render(){
		return (

			<article className='footer'>
				<footer className='flex justify-center'>
		 			<ul className='footer--navigation flex'>
		 				<li>About</li>
						<li>Contact</li>
					</ul>
				</footer>
			</article>
		);
	}
}
