import { Meteor } from 'meteor/meteor';
import { Schools } from '../collection/schools';

export function createSchoolAdmin({email, password, schoolId}, callback) {
    Accounts.createUser({email, password, schoolId, isAdmin: true}, function(error){
        if (error) {
            console.log(error);
            //Schools.remove({_id: schoolId});
            if (callback) {
                callback(error);
            }
        } else {
            Meteor.call("schools.addAdmin", schoolId, function(error, result){
                if(error){
                    console.log("error", error);
                }
                if (callback) {
                    callback(error, schoolId);
                }
            });
        }
    });
}

export function loginUser({email, password}, callback) {
    Meteor.loginWithPassword(email, password, function(error) {
        if(error) {
            console.error('email or password are wrong');
            callback(error);
        } else {
            Meteor.subscribe("currentUser", function() {
                const user = Meteor.user();
                Meteor.call('schools.findById', user.schoolId, function(error, school) {
                    if(callback) {
                        callback(error, school);
                    }
                });
               
            })
        }
    })
}