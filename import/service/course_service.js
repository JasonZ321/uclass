import {Meteor} from 'meteor/meteor';
import {Courses} from '../../import/collection/courses';

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

export function createCategory(category, callback) {
    Meteor.call('categories.insert', category, function(error, result) {
        if(error) {
            console.log('error when creating category', error);
        }
        if(result) {
            console.log('Category %s created', result)
        }
        if(callback) {
            callback(error, result);
        }
    })
}

export function getAllCourses() {
    return Courses.find({}).fetch();
}

export function getAllCategories(callback) {
    Meteor.call('categories.findAll', function(error, result) {
        if(error) {
            console.log('error when finding categories ', error);
        }
        if(callback) {
            callback(error, result);
        }
    })
}