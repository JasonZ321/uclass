import React from 'react';
import { LOGIN_TYPE_ADMIN, LOGIN_TYPE_TEACHER, LOGIN_TYPE_STUDENT } from '../../../import/constants';
const SignInTypeSelector = ({selectedType, onSelectLoginType}) => {
    let styles = {
        adminSelector: getSelectorClassName(LOGIN_TYPE_ADMIN, selectedType),
        teacherSelector: getSelectorClassName(LOGIN_TYPE_TEACHER, selectedType),
        studentSelector: getSelectorClassName(LOGIN_TYPE_STUDENT, selectedType)
    }
    return (
        <div className="mt-2 text-center">
            <div className={styles.adminSelector} onClick={()=>onSelectLoginType(LOGIN_TYPE_ADMIN)}>我是管理员</div>
            <div className={styles.teacherSelector} onClick={()=>onSelectLoginType(LOGIN_TYPE_TEACHER)}>我是老师</div>
            <div className={styles.studentSelector} onClick={()=>onSelectLoginType(LOGIN_TYPE_STUDENT)}>我是学生</div>
        </div>
    )
}

const getSelectorClassName = (selector, selectedType) => {
    if (selector == selectedType) {
        return "d-inline ml-5 btn btn-primary";
    } else {
        return "d-inline ml-5";
    }
}

export default SignInTypeSelector;
