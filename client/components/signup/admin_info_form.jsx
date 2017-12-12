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
            email: null,
            password: null,
            password_confirm: null,
            nick_name: null,
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
            const {email, password, nick_name} = this.state;
            createSchoolAdmin({schoolId, email, password, nick_name}, this.submitComplete)
        }
    }
    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onNickNameChange = (e) => {
        this.setState({
            nick_name: e.target.value
        })
    }
    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onPasswordConfirmChange = (e) => {
        this.setState({
            password_confirm: e.target.value
        })
    }
    submitComplete = (error, userId) => {
        const {onClose} = this.props;
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
        const { email, nick_name, password, password_confirm } = this.state;
        return email && nick_name
        && password && password_confirm 
        && password === password_confirm;
    }
    handleRequestClose = () => {
        this.setState({
            hasError: false,
        });
    };
    render() {
        const { email, nick_name, password, password_confirm, inValid } = this.state;
        return (
            <form onSubmit={this.submitAdmin.bind(this)}>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            email || !inValid ?
                            <TextField onChange={this.onEmailChange} floatingLabelText="邮箱" fullWidth={true}/> :
                            <TextField onChange={this.onEmailChange} floatingLabelText="邮箱" errorText="邮箱必须填写" fullWidth={true}/>
                        }
                        
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            nick_name || !inValid ?
                            <TextField onChange={this.onNickNameChange} floatingLabelText="昵称" fullWidth={true}/> :
                            <TextField onChange={this.onNickNameChange} floatingLabelText="昵称" errorText="昵称必须填写" fullWidth={true}/>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            password || !inValid ?
                                password_confirm === password ? 
                                    <TextField onChange={this.onPasswordChange} floatingLabelText="密码" fullWidth={true}/> :
                                    <TextField onChange={this.onPasswordChange} floatingLabelText="密码" errorText="密码输入不一致" fullWidth={true}/>
                            :<TextField onChange={this.onPasswordChange} floatingLabelText="密码" errorText="密码必须填写" fullWidth={true}/>
                        }
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            password_confirm  || !inValid ?
                                password_confirm === password ? 
                                    <TextField onChange={this.onPasswordConfirmChange} floatingLabelText="密码确认" fullWidth={true}/> :
                                    <TextField onChange={this.onPasswordConfirmChange} floatingLabelText="密码确认" errorText="密码输入不一致" fullWidth={true}/>
                            :<TextField onChange={this.onPasswordConfirmChange} floatingLabelText="密码确认" errorText="密码确认必须填写" fullWidth={true}/>
                        }
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
}


export default AdminInfoForm;