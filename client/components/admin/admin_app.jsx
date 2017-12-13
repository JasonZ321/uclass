import React, { Component } from 'react';
import {getCityAndSchoolNameByUrl} from '../../../import/utils/common_util';
export default class AdminApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger;
        const url = this.props.location.pathname;
        const cityAndName = getCityAndSchoolNameByUrl(url);
        return <div>Admin app</div>;
    }
}