import App from 'shared/app';
import Footer from 'shared/footer';
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
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <Route path="/" component={Ireland}/>
              <Route path="/ireland/" component={Ireland}/>
              <Route path="/dc/" component={DC} />
              <Route path="/stlouis/" component={Stlouis}/>
            </Route>
          </Router>

       </div>
    </div>
  );
  }
}
