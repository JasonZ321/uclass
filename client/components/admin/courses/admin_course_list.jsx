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

const getCategoryNameFromId = (categories, id) => {
    for(let i = 0; i<categories.length; i++) {
        if(categories[i]._id === id) {
            return categories[i].name;
        }
    }
}

const addCategoryToCourses = (courses, categories) => {
    let categoryCourses = {};
    courses.forEach(course => {
        const categoryName = getCategoryNameFromId(categories, course.categoryId);
        if(categoryCourses[categoryName]) {
            categoryCourses[categoryName].push(course);
        } else {
            categoryCourses[categoryName] = [course];
        }
    });
    return categoryCourses;
}

const AdminCourseList = ({courses, categories}) => {
    const categoryAndCourses = addCategoryToCourses(courses, categories);
        return <div>
        <h3>所有课程</h3>
        <div style={styles.root}>
            {
                categories.map( category => {
                    const courses = categoryAndCourses[category.name];
                    if(courses) {
                        return <div key={category.name}>
                            <h2>{category.name}</h2>
                                <GridList style={styles.gridList}>
                                    {courses.map((course) => (
                                        <AdminCourseListCell
                                            key={course._id}
                                            course={course} />
                                    ))}
                                </GridList>
                        </div>
                    } else {
                        return <div></div>
                    }
                    
                })
            }
        </div>
    </div>
}

export default AdminCourseList;