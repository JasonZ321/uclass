import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class SchoolInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inValid: false
        }
    }
    submitSchool = (event) => {
        event.preventDefault();        
        if(this.isValid()) {
            const {onClose} = this.props;
            console.log('submit school');
            onClose();
        } else {
            this.setState({inValid: true});
        }

    }
    isValid = () => {
        const { school_name, school_city } = this.refs;
        debugger;
        return school_name.getValue() && school_city.getValue();
    }
    renderNormalForm() {
        const {onPrevious} = this.props;
        return (
            <form onSubmit={this.submitSchool.bind(this)}>
                <Row>
                    <Col xs={12} md={6}>
                            <TextField ref="school_name" floatingLabelText="学校名称" fullWidth={true}/> 
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField ref="school_city" floatingLabelText="所在城市" fullWidth={true}/> 
                    </Col>
                </Row>
                <Row>
                <Col xs={12}>
                  {this.props.stepper}
                </Col>
              </Row>
              <div style={{margin: '12px 0'}}>
                    <FlatButton
                        label="后退"
                        disabled={false}
                        onClick={onPrevious}
                        style={{marginRight: 12}}
                    />
                    <RaisedButton
                        label={'完成'}
                        type='submit'
                        primary={true}
                    />
                </div>
            </form>
        )
    }
    renderInvalidForm() {
        const {onPrevious} = this.props;
        const { school_name, school_city } = this.refs;
        return (
            <form onSubmit={this.submitSchool.bind(this)}>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            school_name.getValue() ? 
                            <TextField ref="school_name" floatingLabelText="学校名称" fullWidth={true}/> :
                            <TextField ref="school_name" floatingLabelText="学校名称" errorText="学校名称必须填写" fullWidth={true}/>
                        }
                        
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            school_city.getValue() ?
                            <TextField ref="school_city" floatingLabelText="所在城市" fullWidth={true}/> :
                            <TextField ref="school_city" floatingLabelText="所在城市" errorText="学校城市必须填写" fullWidth={true}/>                    
                        }
                    </Col>
                </Row>
                <Row>
                <Col xs={12}>
                  {this.props.stepper}
                </Col>
              </Row>
              <div style={{margin: '12px 0'}}>
                    <FlatButton
                        label="后退"
                        disabled={false}
                        onClick={onPrevious}
                        style={{marginRight: 12}}
                    />
                    <RaisedButton
                        label={'完成'}
                        type='submit'
                        primary={true}
                    />
                </div>
            </form>
        )
    }
    render() {
        return this.state.inValid ? this.renderInvalidForm() : this.renderNormalForm();
        
    }
}

export default SchoolInfoForm;