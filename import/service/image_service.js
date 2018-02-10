import { Meteor } from 'meteor/meteor';
import { Images } from '../collection/images';

export function uploadImage(file, afterUploadCallback) {
    Images.insert(file, function(err, fileObj){
        if (err) {
            console.log(err);
        } else {
            const imageURL = 'http://localhost:3000/cfs/files/images/' + fileObj._id;

            fileObj.on('uploaded', Meteor.bindEnvironment(function() {
                // TODO: image still not uploaded at this point for some reason.
                // work around set time out
                setTimeout(function () {
                    afterUploadCallback(imageURL);
                }, 1000);

            }));
        }
    });
}