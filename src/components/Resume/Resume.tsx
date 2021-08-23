import React from 'react';
import resume from '../../assets/images/resume.png';
import wall from '../../assets/images/wall.jpeg';
import { Navbar } from '../Navbar';



export const Resume = () => {
    return (
        <div>
            <Navbar />
            <h1>Resume</h1>
            <img src={resume} width="70%"/>
        </div>
    )
}