import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminCourseList from './admin_course_list';
import {getAllCourses} from '../../../../import/service/course_service';

const AdminCourseListContainer = withTracker(({id}) => {
    const courses = Meteor.subscribe('courses').ready() ? getAllCourses() : [];
    return {
        courses
    }
})(AdminCourseList);

export default AdminCourseListContainer;