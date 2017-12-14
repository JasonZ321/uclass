import React, { Component } from 'react';
import {getCityAndSchoolNameByUrl} from '../../../import/utils/common_util';
import {withRouter} from 'react-router-dom';
export default class AdminApp extends Component {
    constructor(props) {
        super(props);
    }
    signOut = (history) => {
        Meteor.logout(function() {
			console.log('Logged out');
			history.push('/');
		});
    }
    render() {
        const url = this.props.location.pathname;
        const cityAndName = getCityAndSchoolNameByUrl(url);
        const SignOutButton = withRouter(({history}) => (
            <button className="btn btn-primary mt-2 float-right" onClick={() => this.signOut(history)}>退出</button>
        ));
        return <div>Admin app{cityAndName[1]}<br /><SignOutButton /></div>;
    }
}