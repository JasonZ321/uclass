import {Meteor} from 'meteor/meteor';
import {Teachers} from '../collection/teachers';

export function createTeacher(teacher, callback) {
    Meteor.call('teachers.insert', teacher, function(error, result) {
        if(error) {
            console.log('error when creating teacher', error);
        }
        if(result) {
            console.log('teacher %s created', result)
        }
        if(callback) {
            callback(error, result);
        }
    });
}

export function deleteTeacher(teacher, callback) {
    Meteor.call('teachers.remove', teacher, function(error, result) {
        if(error) {
            console.log('error when deleting teacher', error);
        }
        if(result) {
            console.log('teacher %s deleted', result)
        }
        if(callback) {
            callback(error, result);
        }
    })
}

export function getTeachers(schoolId) {
    return Teachers.find({schoolId: schoolId}).fetch();
}
