import React from 'react';
import Dropzone from 'react-dropzone';

const EmptyAvartar = () => (
	<div className='text-center'>上传图片</div>
)

const Content = ({avatarURL}) => (
	avatarURL != null ? <img src={avatarURL} className='img-responsive' /> : <EmptyAvartar />
)

const ImageUploader = ({onImageUpload, avatarURL}) => {
	return (
        <Dropzone onDrop={onImageUpload}>
            <Content avatarURL={avatarURL} />
        </Dropzone>
	);
}

export default ImageUploader;