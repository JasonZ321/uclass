import { withTracker } from 'meteor/react-meteor-data';
import SignInPage from './signin_page';
import { LOGIN_TYPE_ADMIN, LOGIN_TYPE_TEACHER, LOGIN_TYPE_STUDENT } from '../../../import/constants';

export default SignInPageContainer = withTracker(() => {
    return {
        loginType: LOGIN_TYPE_TEACHER
    }
})(SignInPage);