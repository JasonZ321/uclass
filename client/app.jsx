import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SignInPageContainer from './components/signup/signin_page_container';
import IndexPage from './components/index_page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const browserHistory = createBrowserHistory();
const renderRoutes = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/signin" component={SignInPageContainer}/>
      </div>
    </Router>
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(renderRoutes(), document.querySelector('.render-target'));
});