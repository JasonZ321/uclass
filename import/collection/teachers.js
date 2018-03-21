import { Mongo } from 'meteor/mongo';
import {Categories} from './categories';

Meteor.methods({
	'teachers.insert': function(teacher) {
		const data = {
			createdAt: new Date(),
			...teacher
		};
		return Teachers.insert(data);
	},
	'teachers.remove': function(teacher) {
		const user = Meteor.user();
		if (user.isAdmin) {
			Teachers.remove(teacher);
		} else {
			console.error('User has no permission to remove teacher {}', teacher.name);
		}
	},
	'teachers.update': function(teacherId, teacher) {
		if (teacherId && teacher) {
			Teachers.update(teacherId, {
	        $set: { ...teacher },
	    });
		}
    },
    'teachers.findById': function(teacherId) {
        return Teachers.findOne({_id: teacherId});
    }
});


export const Teachers = new Mongo.Collection('teachers');
Teachers.schema = new SimpleSchema({
    avatarURL:{type: String},
	name: {type: String},
    description: {type: String},
    schoolId:{type: String},
    categories:{type: [Categories]},
	createdAt: {type: Date}
});
