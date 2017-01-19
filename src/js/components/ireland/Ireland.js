import React from 'react';
import {irelandActions} from 'components/ireland/actions';
import {irelandStore} from 'components/ireland/store';
import ScrollMagic from 'scrollmagic';
import {createMap} from 'components/ireland/map';
//console.log(ScrollMagic)
var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		//console.log(controller)

export default class Ireland extends React.Component{
	constructor(props){
		super(props);
		this.state = irelandStore.getState();
		irelandStore.listen(this.storeUpdate.bind(this));



	}
	storeUpdate(){
		//this.setState(irelandStore.getState());
	}
	componentDidMount(){
		irelandActions.initialize();
		var slides = document.querySelectorAll("section.panel");

	// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
				triggerElement: slides[i],
				duration: 700,
				height: 1000
			})
			.setPin(slides[i])
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
		}

		createMap()
	}
	componentDidUpdate(){
	}
	render(){

			return (
				<div id='ireland' className='ireland-container'>
					<section id='ireland1' className='panel venue'>
						<div className='relative panel--inner panel--inner__white flex flex-column padding'>
							<h1 className='text-center'>Dublin City Hall</h1>\
							<p>City Hall is an outstanding example of the Georgian architecture for which Dublin is world-renowned. Audioguides and leaflets are available in English, Irish, German, Spanish, Italian and French.</p>

							<p>The vaults now host the multi-media exhibition, ‘Dublin’s City Hall: The Story of the Capital’. This exhibition traces the evolution of Ireland’s capital city, from before the Anglo-Norman invasion of 1170 to the present day.</p>
						</div>
					</section>
					<section id='ireland2' className='panel afters'>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Fallon & byrnes</h1>
						</div>
					</section>
					<section className='panel hotels'>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Hotels</h1>
						</div>
					</section>
					<section className='panel map'>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Map</h1>
							<div id="map">
							</div>
						</div>
					</section>
					<section className='panel '>
						<div className='relative panel--inner padding'>
							<h1 className='text-center'>Ireland</h1>
						</div>
					</section>
				</div>
			);
		}
}
