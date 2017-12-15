import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminTeacherList from './admin_teacher_list';

const AdminTeacherListContainer = withTracker(({id}) => {
    return {
        id
    };
})(AdminTeacherList);

export default AdminTeacherListContainer;