import React, {Component} from 'react';
import Modal from 'react-modal';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Dropzone from 'react-dropzone'
import ImageUploader from '../../common/image_uploader'
import TextField from 'material-ui/TextField'
import {Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import CourseCategorySelectField from './course_category_select_field';
import {createCategory} from '../../../../import/service/course_service';
import {uploadImage} from '../../../../import/service/image_service';
import {createTeacher} from '../../../../import/service/teacher_service';

export default class CreateNewTeacherPopup extends Component {
    constructor(props) {
        super(props);
        this.onUploadCourseAvatar = this.onUploadCourseAvatar.bind(this);
        this.state = {
            avatarURL: null,
            teacherName: null,
            categories: null,
            teacherDiscription: null
        }
        this.onTeacherNameChange = this.onTeacherNameChange.bind(this);
        this.onCategoriesChange = this.onCategoriesChange.bind(this);
        this.onTeacherDiscriptionChange = this.onTeacherDiscriptionChange.bind(this);
        this.onSubmitTeacher = this.onSubmitTeacher.bind(this);
        this.onFinishSubmitTeacher = this.onFinishSubmitTeacher.bind(this);
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
    onTeacherNameChange(e) {
        this.setState({teacherName:e.target.value})
    }
    onCategoriesChange(categories) {
        this.setState({categories:categories})
    }
    onTeacherDiscriptionChange(e) {
        this.setState({teacherDiscription:e.target.value})
    }
    onSubmitTeacher() {
        const teacher = {
            avatarURL: this.state.avatarURL,
            name: this.state.teacherName,
            categories: this.state.categories,
            schoolId: this.props.schoolId,
            description: this.state.teacherDiscription
        }
        createTeacher(teacher, this.onFinishSubmitTeacher);
    }
    getCategoryByName(categoryName) {
        const {categories} = this.props;
        if(categories) {
            for(let i = 0; i<categories.length; i++) {
                if(categories[i].name.toUpperCase() === categoryName.toUpperCase()) {
                    return categories[i]._id;
                }
            }
        }
    }
    onFinishSubmitTeacher(error, result) {
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
                            <TextField onChange={this.onTeacherNameChange} floatingLabelText="名字" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CourseCategorySelectField onSelectCategories={this.onCategoriesChange} categories={categories}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField onChange={this.onTeacherDiscriptionChange} floatingLabelText="教师介绍" multiLine={true} rows={10}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FlatButton
                                onClick={this.onSubmitTeacher}
                                label={'提交'}
                                type='submit'
                                primary={true}
                            />
                        </Col>
                    </Row>
            </Modal>
    }
}