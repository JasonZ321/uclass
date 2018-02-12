import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminCoursePage from './admin_course_page';

const AdminCoursePageContainer = withTracker(({id}) => {
    return {
        id
    }
})(AdminCoursePage);

export default AdminCoursePageContainer;