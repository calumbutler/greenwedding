import App from 'shared/app';
import Header from 'shared/Header';
import Ireland from 'components/ireland/Ireland';
import DC from 'components/dc/DC';
import Stlouis from 'components/stlouis/Stlouis';
import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
//console.log(Router)
export default class Container extends React.Component {
  render () {
    return (
      <div id="page" className="app hfeed site">
        <div id="container">
          <Router history={hashHistory} className='router'>
            <Route path="/" component={App} className='route'>
              <IndexRoute component={Header} className='contain'/>
              <Route path="/wedding/" component={Ireland}/>
              <Route path="/dc/" component={DC} />
              <Route path="/registry/" component={Stlouis}/>
            </Route>
          </Router>

       </div>
    </div>
  );
  }
}
