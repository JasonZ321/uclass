import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';


const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    }
  };

const AdminCourseList = ({courses}) => {
    return <div>
        <h3>所有课程</h3>
        <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
                {courses.map((course) => (
                    <GridTile
                        key={course._id}
                        title={course.name}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                    <img src={course.avatarURL} />
                    </GridTile>
                ))}
            </GridList>
        </div>
    </div>
}

export default AdminCourseList;