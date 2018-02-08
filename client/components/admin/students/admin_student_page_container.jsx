import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminStudentPage from './admin_student_page';

const AdminStudentPageContainer = withTracker(({id}) => {
    return {
        id
    };
})(AdminStudentPage);

export default AdminStudentPageContainer;