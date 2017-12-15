import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SignInPageContainer from './components/signup/signin_page_container';
import IndexPage from './components/index_page';
import AdminApp from './components/admin/admin_app';
import AdminClasssListContainer from './components/admin/classes/admin_class_list_container';
import AdminStudentListContainer from './components/admin/students/admin_student_list_container';
import AdminTeacherListContainer from './components/admin/teachers/admin_teacher_list_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const requireAuth = (nextState, replace) => {
  debugger;
  if(!Meteor.user()) {
    replace({
      pathname:'/index/signin'
    });
  }
}
const browserHistory = createBrowserHistory();
const renderRoutes = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/index/signin" component={SignInPageContainer}/>
        <Route exact path="/admin/:fullname" component={AdminApp } />
      </div>
    </Router>
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(renderRoutes(), document.querySelector('.render-target'));
});