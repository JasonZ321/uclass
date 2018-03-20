import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SignInPageContainer from './components/signup/signin_page_container';
import IndexPage from './components/index_page';
import AdminApp from './components/admin/admin_app';
import AdminCoursePageContainer from './components/admin/courses/admin_course_page_container';
import AdminStudentPageContainer from './components/admin/students/admin_student_page_container';
import AdminTeacherPageContainer from './components/admin/teachers/admin_teacher_page_container';
import AdminClassPageContainer from './components/admin/classes/admin_class_page_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const requireAuth = (nextState, replace) => {
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
        <Route path="/admin/" component={AdminApp}>
          <Route path="/admin/courses" component={AdminCoursePageContainer}/>
          <Route path="/admin/students" component={AdminStudentPageContainer}/>
          <Route path="/admin/teachers" component={AdminTeacherPageContainer}/>
          <Route path="/admin/classes" component={AdminClassPageContainer}/>
        </Route>
      </div>
    </Router>
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(renderRoutes(), document.querySelector('.render-target'));
});