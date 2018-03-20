import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import AdminClassPage from './admin_class_page';

const AdminClassPageContainer = withTracker(({id}) => {
    return {
        id
    };
})(AdminClassPage);

export default AdminClassPageContainer;