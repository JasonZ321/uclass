import React, { Component } from 'react';
import Navigator from '../navigation/navigator';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AdminClassListContainer from './classes/admin_class_list_container';
import AdminTeacherListContainer from './teachers/admin_teacher_list_container';
import AdminStudentListContainer from './students/admin_student_list_container';

export default class AdminApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {fullname} = this.props.match.params;
        const classUrl = `/admin/${fullname}/classes`;
        const studentUrl = `/admin/${fullname}/students`;
        const teacherUrl = `/admin/${fullname}/teachers`;
        return (
            <Router>
                <div className="row">
                    <Navigator fullname={fullname} routes={{classUrl, studentUrl, teacherUrl}} />
                    <div className="bg-light col-lg-10">
                        <Switch>
                            <Route path={classUrl}  component={AdminClassListContainer}/>
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