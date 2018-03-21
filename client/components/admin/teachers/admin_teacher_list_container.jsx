import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminTeacherList from './admin_teacher_list';
import {getTeachers} from '../../../../import/service/teacher_service';

const AdminTeacherListContainer = withTracker(({schoolId}) => {
    const teachers = Meteor.subscribe('teachers', schoolId).ready() ? getTeachers(schoolId) : [];
    return {
        teachers
    }
})(AdminTeacherList);

export default AdminTeacherListContainer;