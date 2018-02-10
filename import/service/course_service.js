import {Meteor} from 'meteor/meteor';

export function createCourse(course, callback) {
    Meteor.call('courses.insert', course, function(error, result) {
        if(error) {
            console.log('error when creating course', error);
        }
        if(result) {
            console.log('Course %s created', result)
        }
        if(callback) {
            callback(error, result);
        }
    });
}