import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'schools.insert': function(school) {
		const data = {
			createdAt: new Date(),
			...school
		};

		Schools.schema.validate(data);
		return Schools.insert(data);
	},
	'schools.addAdmin': function(schoolId) {
		if (schoolId) {
			Schools.update(schoolId, {
				$set: { admin: this.userId },
			});
		}
	},
	'schools.remove': function(school) {
		if (school.admin === this.userId) {
			Schools.remove(school);
		} else {
			console.error('User has no permission to remove school {}', school.name);
		}
	},
	'schools.update': function(schoolId, school) {
		if (schoolId && school) {
			Schools.update(schoolId, {
	      $set: { ...school },
	    });
		}
    },
    'schools.findById': function(schoolId) {
        return Schools.findOne({_id: schoolId});
    }
});


export const Schools = new Mongo.Collection('schools');
Schools.schema = new SimpleSchema({
	name: {type: String},
	city: {type: String},
	admin: {type: String, optional: true},
	createdAt: {type: Date}
});
