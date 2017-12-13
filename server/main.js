import { Meteor } from 'meteor/meteor';
import {Schools} from '../import/collection/schools';
Meteor.startup(() => {
  Meteor.publish('currentUser', function() {
    return Meteor.users.find({_id: this.userId}, {fields: {'isAdmin': 1, 'schoolId': 1}});
  });
  // code to run on server at startup
  Accounts.onCreateUser(function(options, user) {
    return {...user, ...options};
  });
});
