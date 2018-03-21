import {Meteor} from 'meteor/meteor';
import {Courses} from '../../import/collection/courses';
import { Categories } from '../collection/categories';

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

export function deleteCourse(course, callback) {
    Meteor.call('courses.remove', course, function(error, result) {
        if(error) {
            console.log('error when deleting course', error);
        }
        if(result) {
            console.log('Course %s deleted', result)
        }
        if(callback) {
            callback(error, result);
        }
    })
}

export function getCourses(schoolId) {
    return Courses.find({schoolId: schoolId}).fetch();
}

export function getCategories(schoolId) {
    return Categories.find({}).fetch();
}