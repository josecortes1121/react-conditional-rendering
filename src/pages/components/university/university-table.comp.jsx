import React from 'react';
import CourseTable from '../courses/course.comp';
import StudentRegistration from '../student-registration/student-registration.comp';
import TituloTable from '../title/title.comp';
import logo from './logo.jpg'
import logo1 from './logo1.jpg'

import './university-table.style.css';

const UniversityTable = () => {
    return (
        <div className="university-table-container">
            <h2>UNIVERSITY OF MANIZALES</h2>
            <h2>2021</h2>

            <CourseTable categoryName="Programing IV" />
            <TituloTable/>
            <table>
                <tr>
                <td ><StudentRegistration student={{name:"Jose Cortes"}} /></td>
                <td ><StudentRegistration student={{grade:"4.5"}} /></td>
                <td ><StudentRegistration student={{gender:"", }} /> <img src={logo} alt="logo" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Luisa Trujillo"}} /></td>
                <td ><StudentRegistration student={{grade:"2.9"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /> <img src={logo1} alt="logo1" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Carlos Garcia"}} /></td>
                <td ><StudentRegistration student={{grade:"5.0"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo} alt="logo" width="30px"/></td>     
                </tr>  
            </table>

            <CourseTable categoryName="Databases" />
            <TituloTable/>
            <table>
                <tr>
                <td ><StudentRegistration student={{name:"Victor Morales"}} /></td>
                <td ><StudentRegistration student={{grade:"2.0"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo} alt="logo" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Cristina Garcia"}} /></td>
                <td ><StudentRegistration student={{grade:"4.5"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo1} alt="logo1" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Maria Quintero"}} /></td>
                <td ><StudentRegistration student={{grade:"3.3"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo1} alt="logo1" width="30px"/></td>     
                </tr>  
            </table>

            <CourseTable categoryName="Networks II" />
            <TituloTable/>
            <table>
                <tr>
                <td ><StudentRegistration student={{name:"Alberto Granados"}} /></td>
                <td ><StudentRegistration student={{grade:"1.7"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo} alt="logo" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Andres Cortes"}} /></td>
                <td ><StudentRegistration student={{grade:"4.8"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo} alt="logo" width="30px"/></td>     
                </tr>
                
                <tr>
                <td ><StudentRegistration student={{name:"Olga Prieto"}} /></td>
                <td ><StudentRegistration student={{grade:"2.1"}} /></td>
                <td ><StudentRegistration student={{gender:""}} /><img src={logo1} alt="logo1" width="30px"/></td>     
                </tr>  
            </table>

        </div>
    );
}

export default UniversityTable;