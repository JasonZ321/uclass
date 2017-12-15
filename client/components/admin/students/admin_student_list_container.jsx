import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminStudentList from './admin_student_list';

const AdminStudentListContainer = withTracker(({id}) => {
    return {
        id
    };
})(AdminStudentList);

export default AdminStudentListContainer;