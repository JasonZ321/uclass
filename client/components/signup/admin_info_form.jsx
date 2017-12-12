import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { createSchoolAdmin } from '../../../import/service/user_service';
import Snackbar from 'material-ui/Snackbar';
class AdminInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inValid: false,
            hasError: false,
            errorMsg: null
        }
    }
    submitAdmin = (event) => {
        event.preventDefault();
        if(!this.isValid()) {
            this.setState({inValid : true});
        } else {
            const schoolId = this.props.newSchoolId;
            const email = this.refs.email.getValue();
            const password = this.refs.password.getValue();
            const nick_name = this.refs.nick_name.getValue();
            createSchoolAdmin({schoolId, email, password, nick_name}, this.submitComplete)
        }
    }
    submitComplete = (error, userId) => {
        const {onClose} = this.props;
        debugger;
        if(!error) {
            console.log('submit admin');
            onClose();
        } else {
            this.setState({
                hasError: true,
                errorMsg: error.reason
            });
        }
    }
    isValid = () => {
        const { email, nick_name, password, password_confirm } = this.refs;
        return email.getValue() && nick_name.getValue()
        && password.getValue() && password_confirm.getValue() 
        && password.getValue() === password_confirm.getValue();
    }
    handleRequestClose = () => {
        this.setState({
            hasError: false,
        });
      };
    renderInvalidForm() {
        const { email, nick_name, password, password_confirm } = this.refs;
        return (
            <form onSubmit={this.submitAdmin.bind(this)}>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            email.getValue() ? 
                            <TextField ref="email" floatingLabelText="邮箱" fullWidth={true}/> :
                            <TextField ref="email" floatingLabelText="邮箱" errorText="邮箱必须填写" fullWidth={true}/>
                        }
                        
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            nick_name.getValue() ?
                            <TextField ref="nick_name" floatingLabelText="昵称" fullWidth={true}/> :
                            <TextField ref="nick_name" floatingLabelText="昵称" errorText="昵称必须填写" fullWidth={true}/>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            password.getValue() ?
                                password_confirm.getValue() === password.getValue() ? 
                                    <TextField ref="password" floatingLabelText="密码" fullWidth={true}/> :
                                    <TextField ref="password" floatingLabelText="密码" errorText="密码输入不一致" fullWidth={true}/>
                            :<TextField ref="password" floatingLabelText="密码" errorText="密码必须填写" fullWidth={true}/>
                        }
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            password_confirm.getValue() ?
                                password_confirm.getValue() === password.getValue() ? 
                                    <TextField ref="password_confirm" floatingLabelText="密码确认" fullWidth={true}/> :
                                    <TextField ref="password_confirm" floatingLabelText="密码确认" errorText="密码输入不一致" fullWidth={true}/>
                            :<TextField ref="password_confirm" floatingLabelText="密码确认" errorText="密码确认必须填写" fullWidth={true}/>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <div style={{margin: '12px 0'}}>
                        <FlatButton
                            label="后退"
                            style={{marginRight: 12}}
                        />
                        <RaisedButton
                            label={'完成'}
                            type='submit'
                            primary={true}
                        />
                    </div>
                    </Col>
                </Row>
                <Snackbar
                    open={this.state.hasError}
                    message={this.state.errorMsg}
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}
                />
            </form>
        )
    }
    renderNormalForm() {
        return (
            <form onSubmit={this.submitAdmin}>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField ref="email" floatingLabelText="邮箱" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField ref="nick_name" floatingLabelText="昵称" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField ref="password" floatingLabelText="密码" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField ref="password_confirm" floatingLabelText="密码确认" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <div style={{margin: '12px 0'}}>
                        <FlatButton
                            label="后退"
                            disabled={true}
                            style={{marginRight: 12}}
                        />
                        <RaisedButton
                            label={'下一步'}
                            type='submit'
                            primary={true}
                        />
                    </div>
                    </Col>
                </Row>
                <Snackbar
                    open={this.state.hasError}
                    message={this.state.errorMsg}
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}
                />
            </form>
        )
    }
    render() {
        return this.state.inValid ? this.renderInvalidForm() : this.renderNormalForm();
    }
}


export default AdminInfoForm;