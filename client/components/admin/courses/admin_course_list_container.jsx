import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminCourseList from './admin_course_list';

const AdminCourseListContainer = withTracker(({id}) => {
    ;
    return {
        id
    }
})(AdminCourseList);

export default AdminCourseListContainer;