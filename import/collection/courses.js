import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'courses.insert': function(course) {
		const data = {
			createdAt: new Date(),
			...course
		};

		Courses.schema.validate(data);
		return Courses.insert(data);
	},
	'courses.remove': function(course) {
		if (course.admin === this.userId) {
			Courses.remove(course);
		} else {
			console.error('User has no permission to remove course {}', course.name);
		}
	},
	'courses.update': function(courseId, course) {
		if (courseId && course) {
			Courses.update(courseId, {
	      $set: { ...course },
	    });
		}
    },
    'courses.findById': function(courseId) {
        return Courses.findOne({_id: courseId});
    }
});


export const Courses = new Mongo.Collection('courses');
Courses.schema = new SimpleSchema({
    avatarURL:{type: String},
	name: {type: String},
	category: {type: String},
	description: {type: String},
	createdAt: {type: Date}
});
