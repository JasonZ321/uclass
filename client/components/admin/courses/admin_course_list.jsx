import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';
import AdminCourseListCell from './admin_course_list_cell';


const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
    }
  };
const AdminCourseList = ({courses}) => {
        return <div>
        <h3>所有课程</h3>
        <div>
            <GridList style={styles.gridList}>
                {courses.map((course) => (
                    <AdminCourseListCell
                        key={course._id}
                        course={course}>
                        onDeleteCourse={this.onDeleteCourse}
                    </AdminCourseListCell>
                ))}
            </GridList>
        </div>
    </div>
}

export default AdminCourseList;