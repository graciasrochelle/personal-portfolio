import React from 'react';
import "./Pagecontent.css";
import { About, Experience, Education, Skills, Certificates, Projects, Interests } from "./index"

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