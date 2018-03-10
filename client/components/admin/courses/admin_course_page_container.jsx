import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminCoursePage from './admin_course_page';
import {getCurrentUser} from '../../../../import/service/user_service';

const AdminCoursePageContainer = withTracker(() => {
    const currentUser = Meteor.subscribe('currentUser').ready() ? getCurrentUser() : null;
    return {
        currentUser
    }
})(AdminCoursePage);

export default AdminCoursePageContainer;