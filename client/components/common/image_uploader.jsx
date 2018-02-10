import React from 'react';
import Dropzone from 'react-dropzone';

const EmptyAvartar = (width, height) => (
	<div className='text-center' style={{width: width, height: height}}>上传图片</div>
)

const Content = ({avatarURL, width, height}) => {
	
	return avatarURL != null ? <img src={avatarURL} style={{width: width, height: height}} className='img-responsive' /> : <EmptyAvartar width={width} height={height} />
}

const ImageUploader = ({onImageUpload, avatarURL, width, height}) => {
	return (
		<Dropzone style={{width:width, height:height, border:'1px solid black'}} 
			onDrop={onImageUpload}>
            <Content avatarURL={avatarURL} width={width} height={height} />
        </Dropzone>
	);
}

export default ImageUploader;