import React, { Component } from 'react';
import SignInTypeSelector from './signin_type_selector';
import CreateSchoolPopUp from './create_school_popup';
import {CREATE_SCHOOL_MODAL} from '../../../import/constants';
import {loginUser} from '../../../import/service/user_service';

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            loginType: this.props.loginType,
            isPopUpOpen: false,
            emailOrPhone: null,
            password: null
        });
    }
    openPopup = () => {
        this.setState({isPopUpOpen: true});
    }
    closePopup= ()=> {
        this.setState({isPopUpOpen: false});
    }
    changeLoginType = (loginType) => {
        this.setState({loginType});
    }
    onEmailOrPhoneChange = (e) => {
        this.setState({emailOrPhone: e.target.value});
    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    login = (e) => {
        e.preventDefault();
        const {emailOrPhone, password} = this.state;
        loginUser({email: emailOrPhone, password}, function(error, school) {
            if(error) {
                alert('wrong login');
            } else {
                const {name, city} = school;
                const url = `/${city}-${name}`;
                //TODO use react-router to redirect
            }
        })
    }
    render() {
        return (
            <div className="mt-5">
                <button className="btn btn-outline-primary float-right mr-5" onClick={this.openPopup.bind(this)}>创建学校</button>
                <h1 className="mt-2 text-center">优课</h1>
                <SignInTypeSelector selectedType={this.state.loginType} onSelectLoginType={this.changeLoginType.bind(this)} />
                <div className="form-group d-flex flex-row justify-content-center row-hl">
                    <form onSubmit={this.login}>
                        <input type="text" onChange={this.onEmailOrPhoneChange} className="form-control mt-2" placeholder="邮箱或手机" />
                        <input type="password" onChange={this.onPasswordChange} className="form-control mt-2" placeholder="密码" />
                        <button className="btn btn-primary mt-2 float-right" type="submit">登陆</button>
                    </form>
                </div>
                <CreateSchoolPopUp isOpen={this.state.isPopUpOpen} onClose={this.closePopup.bind(this)}/>
            </div>
        )

    }
}