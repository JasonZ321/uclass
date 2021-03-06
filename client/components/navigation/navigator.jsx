import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {getCityAndSchoolNameByUrl} from '../../../import/utils/common_util';

export default class Navigator extends Component {
    signOut = (history) => {
        Meteor.logout(function() {
			console.log('Logged out');
			history.push('/');
		});
    }
    render() {
        const SignOutButton = withRouter(({history}) => (
            <a onClick={() => this.signOut(history)}>退出</a>
        ));
        const {courseUrl, studentUrl, teacherUrl, classUrl} = this.props.routes;
        return (
            <div className="bg-dark col-lg-2" style={{'height':'100vh'}} >
                <h2 className="text-white">Beta学堂</h2><SignOutButton />
                <nav className="navbar navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" >首页</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={courseUrl}>课程介绍</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={teacherUrl}>教师介绍</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={classUrl}>课时管理</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={studentUrl}>学生档案</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}