import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminTeacherPage from './admin_teacher_page';
import {getCurrentUser} from '../../../../import/service/user_service';
import { getCategories } from '../../../../import/service/course_service';

const AdminTeacherPageContainer = withTracker(() => {
    const currentUser = Meteor.subscribe('currentUser').ready() ? getCurrentUser() : null;
    const schoolId = currentUser ? currentUser.schoolId : null;
    const categories = Meteor.subscribe('categories', schoolId).ready() ? getCategories(schoolId) : null;
    return {
        currentUser,
        categories
    };
})(AdminTeacherPage);

export default AdminTeacherPageContainer;