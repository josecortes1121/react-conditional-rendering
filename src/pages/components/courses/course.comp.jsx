import React from 'react';

import './course.style.css';

const CourseTable = (props) => {
    return (
        <div className="course-table-container">
            {props.categoryName}
        </div>
    );
}

export default CourseTable;