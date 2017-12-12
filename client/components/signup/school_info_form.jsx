import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { createSchool } from '../../../import/service/school_service';

class SchoolInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inValid: false,
            school_name: null,
            school_city: null
        }
    }
    onSchoolNameChange = (e) => {
        this.setState({school_name: e.target.value});
    }
    onSchoolCityChange = (e) => {
        this.setState({school_city: e.target.value});
    }
    submitSchool = (event) => {
        event.preventDefault();        
        if(this.isValid()) {
            const {school_city, school_name} = this.state;
            console.log('submit school');
            createSchool({name: school_name, city: school_city}, this.createSchoolComplete);
        } else {
            this.setState({inValid: true});
        }
    }
    createSchoolComplete = (error, schoolId) => {
        const {onNext, onCreateSchool} = this.props;
        if(!error) {
            onCreateSchool(schoolId)
            onNext();
        }
    }
    isValid = () => {
        const { school_name, school_city } = this.state;
        return school_name && school_city;
    }
    render() {
        const {onPrevious} = this.props;
        const { school_name, school_city, inValid } = this.state;
        return (
            <form onSubmit={this.submitSchool.bind(this)}>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            school_name || !inValid ? 
                            <TextField onChange={this.onSchoolNameChange} floatingLabelText="学校名称" fullWidth={true}/> :
                            <TextField onChange={this.onSchoolNameChange} floatingLabelText="学校名称" errorText="学校名称必须填写" fullWidth={true}/>
                        }
                        
                    </Col>
                    <Col xs={12} md={6}>
                        {
                            school_city || !inValid ? 
                            <TextField onChange={this.onSchoolCityChange} floatingLabelText="所在城市" fullWidth={true}/> :
                            <TextField onChange={this.onSchoolCityChange} floatingLabelText="所在城市" errorText="学校城市必须填写" fullWidth={true}/>                    
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
                        label={'下一步'}
                        type='submit'
                        primary={true}
                    />
                </div>
            </form>
        )
    }
}

export default SchoolInfoForm;