import React from 'react';
import {dcActions} from 'components/dc/actions';
import {dcStore} from 'components/dc/store';
import {batchUpdate} from 'components/dc/utilities';
import {Link} from 'react-router';


export default class DC extends React.Component {
	constructor(props){
		super(props);
		this.state = dcStore.getState();
		dcStore.listen(this.storeUpdate.bind(this));
	}

	storeUpdate(){
		this.setState(dcStore.getState());
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}


	render(){
      return (
				<div>
				dc
				</div>
    );
  }
}
