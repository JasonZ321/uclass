import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminCourseList from './admin_course_list';
import {getCourses} from '../../../../import/service/course_service';

const AdminCourseListContainer = withTracker(({schoolId}) => {
    const courses = Meteor.subscribe('courses', schoolId).ready() ? getCourses(schoolId) : [];
    return {
        courses
    }
})(AdminCourseList);

export default AdminCourseListContainer;