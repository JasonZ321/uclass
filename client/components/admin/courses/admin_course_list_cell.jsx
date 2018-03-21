import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import {deleteCourse} from '../../../../import/service/course_service';

class AdminCourseListCell extends Component {
    constructor(props) {
        super(props);
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.state = {
            deleteDialogOpen: false
        }
    }
    openDeleteDialog() {
        this.setState({deleteDialogOpen: true});
    }
    confirmDelete() {
        deleteCourse(this.props.course, () => {
            this.setState({deleteDialogOpen: false});
        })
    }
    cancelDelete() {
        this.setState({deleteDialogOpen: false});
    }
    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={false}
              keyboardFocused={true}
              onClick={this.cancelDelete}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.confirmDelete}
            />,
          ];
          const { course } = this.props;
        return <div>
            <Card>
                <CardMedia>
                <img src={course.avatarURL} alt="" width="400px" height="300px" />
                </CardMedia>
                <CardTitle title={course.name} />
                <CardText>
                {course.description}
                </CardText>
                <CardActions>
                <FlatButton label="删除" onClick={this.openDeleteDialog}/>
                </CardActions>
            </Card>
            <Dialog
            title="删除课程"
            actions={actions}
            modal={false}
            open={this.state.deleteDialogOpen}
            onRequestClose={this.handleClose}
            >
            确认要删除课程{course.name}吗？小心被老板骂哦
            </Dialog>
        </div>
            
    }
}
export default AdminCourseListCell;