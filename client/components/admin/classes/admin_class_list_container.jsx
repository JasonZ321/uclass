import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import AdminClassList from './admin_class_list';

const AdminClassListContainer = withTracker(({id}) => {
    debugger;
    return {
        id
    }
})(AdminClassList);

export default AdminClassListContainer;