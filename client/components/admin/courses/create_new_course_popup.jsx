import React, {Component} from 'react';
import Modal from 'react-modal';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Dropzone from 'react-dropzone'
import ImageUploader from '../../common/image_uploader'
import {uploadImage} from '../../../../import/service/image_service';

export default class CreateNewCoursePopup extends Component {
    constructor(props) {
        super(props);
        this.onUploadCourseAvatar = this.onUploadCourseAvatar.bind(this);
        this.state = {
            avatarURL: null
        }
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
    render() {
        const {isOpen, onClose} = this.props;

        return <Modal isOpen={isOpen} ariaHideApp={false}> 
                <IconButton onClick={onClose}><Clear /></IconButton>
                <ImageUploader onImageUpload={this.onUploadCourseAvatar} avatarURL={this.state.avatarURL}/>
            </Modal>
    }
}