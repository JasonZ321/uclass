import React, { Component } from 'react';
import Navigator from '../navigation/navigator';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AdminCoursePageContainer from './courses/admin_course_page_container';
import AdminTeacherPageContainer from './teachers/admin_teacher_page_container';
import AdminStudentPageContainer from './students/admin_student_page_container';

export default class AdminApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger
        const courseUrl = `/admin/courses`;
        const studentUrl = `/admin/students`;
        const teacherUrl = `/admin/teachers`;
        return (
            <Router>
                <div className="row">
                    <Navigator routes={{courseUrl, studentUrl, teacherUrl}} />
                    <div className="bg-light col-lg-10">
                        <Switch>
                            <Route path={courseUrl}  component={AdminCoursePageContainer}/>
                            <Route path={studentUrl}  component={AdminStudentPageContainer}/>
                            <Route path={teacherUrl}  component={AdminTeacherPageContainer}/>
                            <Route render={() => <div>Not found</div>} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )

    }
}