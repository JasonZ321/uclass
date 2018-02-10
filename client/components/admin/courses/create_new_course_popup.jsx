import React, {Component} from 'react';
import Modal from 'react-modal';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Dropzone from 'react-dropzone'
import ImageUploader from '../../common/image_uploader'
import TextField from 'material-ui/TextField'
import {Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import {uploadImage} from '../../../../import/service/image_service';
import {createCourse} from '../../../../import/service/course_service';

export default class CreateNewCoursePopup extends Component {
    constructor(props) {
        super(props);
        this.onUploadCourseAvatar = this.onUploadCourseAvatar.bind(this);
        this.state = {
            avatarURL: null,
            courseName: null,
            courseCategory: null,
            courseDiscription: null
        }
        this.onCourseNameChange = this.onCourseNameChange.bind(this);
        this.onCourseCategoryChange = this.onCourseCategoryChange.bind(this);
        this.onCourseDiscriptionChange = this.onCourseDiscriptionChange.bind(this);
        this.onSubmitCourse = this.onSubmitCourse.bind(this);
        this.onFinishSubmitCourse = this.onFinishSubmitCourse.bind(this);
    }
    onUploadCourseAvatar(acceptedFiles) {
        acceptedFiles.forEach(file => {
            let component = this;
            uploadImage(file, (imageURL) => {
                component.setState({
                    avatarURL: imageURL
                })
            })
        });
    }
    onCourseNameChange(e) {
        this.setState({courseName:e.target.value})
    }
    onCourseCategoryChange(e) {
        this.setState({courseCategory:e.target.value})
    }
    onCourseDiscriptionChange(e) {
        this.setState({courseDiscription:e.target.value})
    }
    onSubmitCourse() {
        const course = {
            avatarURL: this.state.avatarURL,
            name: this.state.courseName,
            category: this.state.courseCategory,
            description: this.state.courseDiscription
        }
        createCourse(course, this.onFinishSubmitCourse);
    }
    onFinishSubmitCourse(error, result) {
        if(result) {
            debugger;
            this.props.onClose();
        }
    }
    render() {
        const {isOpen, onClose} = this.props;

        return <Modal isOpen={isOpen} ariaHideApp={false}> 
                    <IconButton onClick={onClose}><Clear /></IconButton>
                    <Row>
                        <Col>
                            <ImageUploader onImageUpload={this.onUploadCourseAvatar} avatarURL={this.state.avatarURL}
                                width={400} height={200}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField onChange={this.onCourseNameChange} floatingLabelText="课程名" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField onChange={this.onCourseCategoryChange} floatingLabelText="分类"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField onChange={this.onCourseDiscriptionChange} floatingLabelText="课程介绍" multiLine={true} rows={10}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FlatButton
                                onClick={this.onSubmitCourse}
                                label={'提交'}
                                type='submit'
                                primary={true}
                            />
                        </Col>
                    </Row>
            </Modal>
    }
}