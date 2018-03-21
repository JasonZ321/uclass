import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton'
import CreateNewTeacherPopup from './create_new_teacher_popup';
import AdminTeacherListContainer from './admin_teacher_list_container';

export default class AdminTeacherPage extends Component {
    constructor(props) {
        super(props);
        this.onCreateNewTeacher = this.onCreateNewTeacher.bind(this);
        this.closeCreateTeacherPopup = this.closeCreateTeacherPopup.bind(this);
        this.state = {
            createTeacherOpen: false
        }
    }
    onCreateNewTeacher() {
        this.setState({
            createTeacherOpen: true
        })
    }
    closeCreateTeacherPopup() {
        this.setState({
            createTeacherOpen: false
        })
    }
    render() {
        const {createTeacherOpen} = this.state;
        const schoolId = this.props.schoolId;
        return <div>
            <div>
                <FlatButton label="添加新教师" primary={true} onClick={this.onCreateNewTeacher}/>
                <CreateNewTeacherPopup categories={this.props.categories} isOpen={createTeacherOpen} onClose={this.closeCreateTeacherPopup} schoolId={schoolId}  />
                <AdminTeacherListContainer schoolId={schoolId}/> 
            </div>
            <div></div>
        </div>
    }
}