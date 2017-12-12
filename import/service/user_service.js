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