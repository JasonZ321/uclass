import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton'
import CreateNewCoursePopupContainer from './create_new_course_popup_container';
import AdminCourseListContainer from './admin_course_list_container';

export default class AdminCoursePage extends Component {
    constructor(props) {
        super(props);
        this.onCreateNewCourse = this.onCreateNewCourse.bind(this);
        this.closeCreateCoursePopup = this.closeCreateCoursePopup.bind(this);
        this.state = {
            createCourseOpen: false
        }
    }
    onCreateNewCourse() {
        this.setState({
            createCourseOpen: true
        })
    }
    closeCreateCoursePopup() {
        this.setState({
            createCourseOpen: false
        })
    }
    render() {
        const {createCourseOpen} = this.state;
        const schoolId = this.props.currentUser ? this.props.currentUser.schoolId : null;
        return <div>
            <div>
                <FlatButton label="添加新课程" primary={true} onClick={this.onCreateNewCourse}/>
                <CreateNewCoursePopupContainer isOpen={createCourseOpen} onClose={this.closeCreateCoursePopup} schoolId={schoolId}  />
                <AdminCourseListContainer schoolId={schoolId}/> 
            </div>
            <div></div>
        </div>
    }
}