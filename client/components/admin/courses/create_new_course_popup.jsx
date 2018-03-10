import React, {Component} from 'react';
import Modal from 'react-modal';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Dropzone from 'react-dropzone'
import ImageUploader from '../../common/image_uploader'
import TextField from 'material-ui/TextField'
import {Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import CourseCategoryAutoCompleteField from './course_category_auto_complete_field'
import {createCategory} from '../../../../import/service/course_service';
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
        this.setState({courseCategory:e})
    }
    onCourseDiscriptionChange(e) {
        this.setState({courseDiscription:e.target.value})
    }
    onSubmitCourse() {
        const {schoolId} = this.props;
        const categoryId = this.getCategoryByName(this.state.courseCategory);
        if(!categoryId) {
            let component = this;
           createCategory({name: this.state.courseCategory, schoolId:schoolId}, function(error, result) {
               if(result) {
                   component.createCourseWithCategory(result);
               }
           })
        } else {
            this.createCourseWithCategory(categoryId);
        }
    }
    createCourseWithCategory(categoryId) {
        const course = {
            avatarURL: this.state.avatarURL,
            name: this.state.courseName,
            categoryId: categoryId,
            schoolId: this.props.schoolId,
            description: this.state.courseDiscription
        }
        createCourse(course, this.onFinishSubmitCourse);
    }
    getCategoryByName(categoryName) {
        const {categories} = this.props;
        if(categories) {
            categories.forEach(category => {
                if(category.name === categoryName) {
                    return category._id;
                }
            });
        }
    }
    onFinishSubmitCourse(error, result) {
        if(result) {
            this.props.onClose();
        }
    }
    render() {
        const {isOpen, onClose, categories} = this.props;

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
                            <CourseCategoryAutoCompleteField onChange={this.onCourseCategoryChange} categories={categories}/>
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