import React, { Component } from 'react';
import Navigator from '../navigation/navigator';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AdminCourseListContainer from './courses/admin_course_list_container';
import AdminTeacherListContainer from './teachers/admin_teacher_list_container';
import AdminStudentListContainer from './students/admin_student_list_container';

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
                            <Route path={courseUrl}  component={AdminCourseListContainer}/>
                            <Route path={studentUrl}  component={AdminStudentListContainer}/>
                            <Route path={teacherUrl}  component={AdminTeacherListContainer}/>
                            <Route render={() => <div>Not found</div>} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )

    }
}