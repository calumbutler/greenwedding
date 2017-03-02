import React from 'react';
import {irelandActions} from 'components/ireland/actions';
import {irelandStore} from 'components/ireland/store';
import ScrollMagic from 'ScrollMagic';
import TweenMax from 'TweenMax'
import TweenLite from 'TweenLite'
import TimelineMax from 'TimelineMax'
import TimelineLite from 'TimelineLite'
import {setTween} from 'scrollmagic-setTween';
import {addIndicators} from 'scrollmagic-addIndicators'
import {createMap} from 'components/ireland/map';
import {initPlaylist} from 'components/ireland/playlist';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

console.log(new ScrollMagic)
// var controller = new ScrollMagic.Controller({
// 			globalSceneOptions: {
// 				triggerHook: 'onLeave'
// 			}
// 		});


export default class Ireland extends React.Component{
	constructor(props){
		super(props);
		this.state = irelandStore.getState();
		irelandStore.listen(this.storeUpdate.bind(this));

		document.getElementById('content').classList.remove('overflow-hidden')


	}
	storeUpdate(){
		//this.setState(irelandStore.getState());
	}
	componentDidMount(){
		irelandActions.initialize();
		var slides = document.querySelectorAll("section.panel");

	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#ireland1"})
					.setTween("#ireland1 > div", {y: "20%", ease: 'Linear'})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#ireland2"})
					.setTween("#ireland2 > div", {y: "20%", ease: 'Linear'})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#ireland3"})
					.setTween("#ireland3 > div", {y: "20%", ease: 'Linear'})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#ireland4"})
					.setTween("#ireland4 > div", {y: "20%", ease: 'Linear'})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#ireland5"})
					.setTween("#ireland5 > div", {y: "20%", ease: 'Linear'})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#ireland6"})
									.setTween("#ireland6 > div", {y: "20%", ease: 'Linear'})

									.addTo(controller);

		createMap();
		initPlaylist();
	}
	componentDidUpdate(){
	}
	render(){

			return (
				<div id='ireland' className='ireland-container'>
					<section id='ireland1' className='parallaxParent ireland--landing relative panel flex flex-column'>
						<h1 className='header--title'>Kendall & Bart</h1>
						<h3 className='header--hashtag text-center'><a href='https://twitter.com/intent/tweet?hashtags=GreenWedding' target='_blank'>#GreenWedding</a></h3>
						<ul className='header--navigation flex flex-row justify-center'>
							<li><Link to={`/wedding/`}>Wedding</Link></li>
							<li><Link to={`/dc/`}>DC Reception</Link></li>
							<li><Link to={`/registry/`}>Registry</Link></li>
						</ul>
					</section>
					<section id='ireland2' className='parallaxParent panel itinerary'>
						<div className='itinerary--inner relative panel--inner flex flex-column padding'>
							<h1 className='text-center'>Itinerary</h1>
							<ul className='itinerary--list'>
								<li><b>3:30pm</b> <a href='http://www.dublincity.ie/node/14412' target='_blank'>Dublin City Hall</a> Kendall and Bart get married</li>
								<li><b>4:00pm</b> Pictures of all wedding guest walking to <a href='http://www.louisfitzgerald.com/stagshead' target='_blank'>Stag Head Pub</a> for drinks</li>
								<li><b>6:00pm</b> Cocktail hour begins at <a href='http://www.fallonandbyrne.com/' target='_blank'>Fallon & Byrne</a> dinner and dancing to follow</li>
								<li><b>1:00am</b> After’s at The Candle Bar at <a href='http://www.kellysdublin.com/' target='_blank'>Kelly’s Hotel</a></li>
							</ul>
						</div>
					</section>
					<section id='ireland3' className='parallaxParent panel afters hotels'>
					<div className='relative panel--inner padding'>
						<h1 className='text-center'>Hotels</h1>
						<div className='flex flex-wrap justify-around'>
							<div className='hotel--container text-center'>
								<h2><a href='http://theclarence.ie/' target='_blank'> The Clarence </a></h2>
								<p>6-8 Wellington Quay,</p>
								<p>Dublin 2</p>
								<img src='images/theclarence.jpeg' height='300' width='275'/>
								<p>Lukasz room rate 150 Euro per night.  Limited space, please reserve asap.</p>
							</div>
							<div className='hotel--container text-center'>

								<h2><a href='http://www.kellysdublin.com/' target='_blank'> Kelly's Hotel Dublin</a></h2>
								<p>35-37 South Great George's Street,</p>
								<p>Dublin 2</p>
								<img src='images/kellys.jpg' height='300' width='275'/>
								<p>VERY limited space.</p>
							</div>
							<div className='hotel--container text-center'>
								<h2><a href='http://graftonguesthouse.com/' target='_blank'> Kelly’s Hotel Guest House</a></h2>
								<p>27 S Great George's St,</p>
								<p>Dublin 2</p>
								<img src='images/grafton-guest.jpg' height='300' width='275'/>
								<p>Across the road from Kelly's</p>
							</div>
							<div className='hotel--container text-center'>
								<h2><a href='http://www.brookshotel.ie/ ' target='_blank'>The Brooks Hotel</a></h2>
								<p>Drury St</p>
								<p>Dublin 2</p>
								<img src='images/brooks.jpg' height='300' width='275'/>

							</div>
							<div className='hotel--container text-center'>
								<h2><a href='http://www.themorgan.com/' target='_blank'> The Morgan </a></h2>
								<p>College Green,</p>
								<p>Westmoreland Street,</p>
								<p>Dublin, D02 HR67</p>
								<img src='images/themorgan.jpeg' height='300' width='275'/>
								<p>Stay and Save promo” 2 nights save10%, 3 nights save 15%</p>

							</div>
						</div>
					</div>
					</section>
					<section id='ireland4' className='parallaxParent panel venue'>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Hotels</h1>
							<div className='flex'>
								<div className='hotel--container text-center'>
									<h2><a href='http://theclarence.ie/'> The Clarence </a></h2>
									<p>6-8 Wellington Quay,</p>
									<p>Dublin 2,</p>
									<p>Dublin</p>
									<img src='images/theclarence.jpeg' height='300' width='275'/>

								</div>
								<div className='hotel--container text-center'>
									<h2><a href='http://www.thewestindublin.com/'> The Westin </a></h2>
									<p>College Green,</p>
									<p>Westmoreland Street,</p>
									<p>Dublin, D02 HR67</p>
									<img src='images/westin.jpg' height='300' width='275'/>

								</div>
								<div className='hotel--container text-center'>
									<h2><a href='http://www.themorgan.com/'> The Morgan </a></h2>
									<p>College Green,</p>
									<p>Westmoreland Street,</p>
									<p>Dublin, D02 HR67</p>
									<img src='images/themorgan.jpeg' height='300' width='275'/>

								</div>
							</div>
						</div>
					</section>
					<section id='ireland5' className='parallaxParent panel map'>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Map</h1>
							<div id="map">
							</div>
						</div>
					</section>
					<section id='ireland6' className='parallaxParent panel '>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Playlist</h1>
						</div>
					</section>
				</div>
			);
		}
}
