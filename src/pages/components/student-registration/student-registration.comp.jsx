import React from 'react';
import './student-registration.style.css';
import logo from './logo.jpg'
import logo1 from './logo1.jpg'
const StudentRegistration = (props) => {
    return (
        <div >
            {props.student.name}
            {
                props.student.grade < 3
                ?
                <span className="missed-notes">{props.student.grade} </span>
                :
                <span>{props.student.grade}</span>
            }
            
            {props.student.gender}
        
        
        
        
        
        </div>
    );
}

export default StudentRegistration;