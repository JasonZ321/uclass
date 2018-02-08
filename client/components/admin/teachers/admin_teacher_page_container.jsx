import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminTeacherPage from './admin_teacher_page';

const AdminTeacherPageContainer = withTracker(({id}) => {
    return {
        id
    };
})(AdminTeacherPage);

export default AdminTeacherPageContainer;