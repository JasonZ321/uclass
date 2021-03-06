import { Meteor } from 'meteor/meteor';
import {Schools} from '../import/collection/schools';
import {Courses} from '../import/collection/courses';
import { Images } from '../import/collection/images';
import { Categories } from '../import/collection/categories';
import { Teachers } from '../import/collection/teachers';

function setUpImageServer() {
  Images.allow({
    'insert': function() {
        // add custom authentication code here
        return true;
    },
    'update': function() {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        // add custom authentication code here
        return true;
    },
    download: function(userId, fileObj) {
        return true
    }
  });
}

Meteor.startup(() => {
  setUpImageServer();
  Meteor.publish('currentUser', function() {
    return Meteor.users.find({_id: this.userId}, {fields: {'isAdmin': 1, 'schoolId': 1}});
  });
  Meteor.publish('courses', function(schoolId) {
    return Courses.find({schoolId: schoolId});
  });
  Meteor.publish('categories', function(schoolId) {
    return Categories.find({schoolId: schoolId});
  });
  Meteor.publish('teachers', function(schoolId) {
    return Teachers.find({schoolId: schoolId});
  })
  // code to run on server at startup
  Accounts.onCreateUser(function(options, user) {
    return {...user, ...options};
  });
});


