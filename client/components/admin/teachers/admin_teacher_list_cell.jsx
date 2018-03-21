import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import {deleteTeacher} from '../../../../import/service/teacher_service';

class AdminTeacherListCell extends Component {
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
        deleteTeacher(this.props.teacher, () => {
            this.setState({deleteDialogOpen: false});
        })
    }
    cancelDelete() {
        this.setState({deleteDialogOpen: false});
    }
    render() {
        const actions = [
            <FlatButton
              label="取消"
              primary={false}
              keyboardFocused={true}
              onClick={this.cancelDelete}
            />,
            <FlatButton
              label="确认"
              primary={true}
              onClick={this.confirmDelete}
            />,
          ];
          const { teacher } = this.props;
        return <div>
            <Card>
                <CardMedia>
                <img src={teacher.avatarURL} alt="" width="400px" height="300px" />
                </CardMedia>
                <CardTitle title={teacher.name} />
                <CardText>
                {teacher.description}
                </CardText>
                <CardActions>
                <FlatButton label="删除" onClick={this.openDeleteDialog}/>
                </CardActions>
            </Card>
            <Dialog
            title="删除教师"
            actions={actions}
            modal={false}
            open={this.state.deleteDialogOpen}
            onRequestClose={this.handleClose}
            >
            确认要删除教师{teacher.name}吗？小心被老板骂哦
            </Dialog>
        </div>
            
    }
}
export default AdminTeacherListCell;