import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CreateNewCoursePopup from './create_new_course_popup';
import {getCategories} from '../../../../import/service/course_service';

const CreateNewCoursePopupContainer = withTracker(({isOpen, onClose, schoolId}) => {
    const categories = Meteor.subscribe('categories', schoolId).ready() ? getCategories(schoolId) : [];
    return {categories, isOpen, onClose};
})(CreateNewCoursePopup);

export default CreateNewCoursePopupContainer;