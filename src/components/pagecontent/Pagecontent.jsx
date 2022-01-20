import React from 'react';
import "./Pagecontent.css";
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certificates from './Certifications';
import Projects from './Projects';
import Interests from './Interests';

function Pagecontent(){
    return(
        <div className="container-fluid p-0">
            <About/>
            <hr className="m-0" />
            <Experience/>
            <hr className="m-0" />
            <Education/>
            <hr className="m-0" />
            <Skills/>
            <hr className="m-0" />
            <Certificates/>
            <hr className="m-0" />
            <Projects/>
            <hr className="m-0" />
            <Interests/>
        </div>
    )
}

export default Pagecontent;