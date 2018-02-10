import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'categories.insert': function(category) {
		const data = {
			createdAt: new Date(),
			...category
		};

		Categories.schema.validate(data);
		return Categories.insert(data);
	},
	'categories.remove': function(category) {
		if (category.admin === this.userId) {
			Categories.remove(category);
		} else {
			console.error('User has no permission to remove category {}', category.name);
		}
	},
	'categories.update': function(categoryId, category) {
		if (categoryId && category) {
			Categories.update(categoryId, {
	      $set: { ...category },
	    });
		}
    },
    'categories.findById': function(categoryId) {
        return Categories.findOne({_id: categoryId});
    },
    'categories.findAll': function() {
        return Categories.find().fetch();
    }
});


export const Categories = new Mongo.Collection('categories');
Categories.schema = new SimpleSchema({
	name: {type: String},
	createdAt: {type: Date}
});
