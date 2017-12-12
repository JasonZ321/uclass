

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Modal from 'react-modal';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import {Stepper, Step, StepButton, StepLabel} from 'material-ui/Stepper'
import Paper from 'material-ui/Paper'
import {Row, Col} from 'react-flexbox-grid'
import SchoolInfoForm from './school_info_form'
import AdminInfoForm from './admin_info_form'

let styles = {
    paper: {
      padding: 10,
      paddingBottom: 30,
      maxWidth: '1200px',
      margin: '15px auto'
    }
}

export default class CreateSchoolPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stepIndex: 0
        }
    }

    nextStep = () => {
        this.setState({
          stepIndex: this.state.stepIndex + 1
        })
    }
    previousStep = (index) => {
        this.setState({
          stepIndex: this.state.stepIndex - 1
        })
    }
    getStepContent(step) {
        const onClose = this.props.onClose;
        switch (step) {
          case 0:
            return <AdminInfoForm onNext={this.nextStep}/>
          case 1:
            return <SchoolInfoForm onPrevious={this.previousStep} onClose={onClose} />
          default:
            return <div></div>
        }
    }
    renderSteppers() {
      const {stepIndex} = this.state;
      return (
        <Paper zDepth={1} style={styles.paper}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>添加管理员账户</StepLabel>
          </Step>
          <Step>
            <StepLabel>填写学校信息</StepLabel>
          </Step>
        </Stepper>
        <div>
          {this.getStepContent(stepIndex)}
        </div>
        </Paper>
      )
    }
    render() {
        const {isOpen, onClose} = this.props;
        return (
            <Modal isOpen={isOpen}> 
              <IconButton onClick={onClose}><Clear /></IconButton>
              {this.renderSteppers()}
            </Modal>
                
        )
    }
}
