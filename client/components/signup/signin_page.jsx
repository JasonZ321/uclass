import React, { Component } from 'react';
import SignInTypeSelector from './signin_type_selector';
import CreateSchoolPopUp from './create_school_popup';
import {CREATE_SCHOOL_MODAL} from '../../../import/constants';

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            loginType: this.props.loginType,
            isPopUpOpen: false
        });
    }
    openPopup() {
        this.setState({isPopUpOpen: true});
    }
    closePopup() {
        this.setState({isPopUpOpen: false});
    }
    changeLoginType(loginType) {
        this.setState({loginType});
    }
    render() {
        return (
            <div className="mt-5">
                <button className="btn btn-outline-primary float-right mr-5" onClick={this.openPopup.bind(this)}>创建学校</button>
                <h1 className="mt-2 text-center">优课</h1>
                <SignInTypeSelector selectedType={this.state.loginType} onSelectLoginType={this.changeLoginType.bind(this)} />
                <div className="form-group d-flex flex-row justify-content-center row-hl">
                    <form>
                        <input type="text" id="emailOrPhone" className="form-control mt-2" placeholder="邮箱或手机" />
                        <input type="password" id="password" className="form-control mt-2" placeholder="密码" />
                        <button className="btn btn-primary mt-2 float-right" type="submit">登陆</button>
                    </form>
                </div>
                <CreateSchoolPopUp isOpen={this.state.isPopUpOpen} onClose={this.closePopup.bind(this)}/>
            </div>
        )

    }
}