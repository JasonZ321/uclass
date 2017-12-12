import { Meteor } from 'meteor/meteor';

export function createSchool(school, callback) {
    Meteor.call('schools.insert', school, function(error, result) {
		if (error) {
			console.log("error", error);
		}
		if (result) {
			console.log("School %s was created.", result );
		}
		if (callback) {
			callback(error, result);
		}
	})
}