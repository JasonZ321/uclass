import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';
import AdminTeacherListCell from './admin_teacher_list_cell';

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

const AdminTeacherList = ({teachers}) => {
        return <div>
        <h3>所有课程</h3>
        <div style={styles.root}>
            {
                <GridList style={styles.gridList}>
                    {teachers.map((teacher) => (
                        <AdminTeacherListCell
                            key={teacher._id}
                            teacher={teacher} />
                    ))}
                </GridList>
            }
        </div>
    </div>
}

export default AdminTeacherList;