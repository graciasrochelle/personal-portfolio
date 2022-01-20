import React from 'react';
import "./Pagecontent.css";
import Gopher from "./img/gopher.png";
import Csharp from "./img/csharp.png";
import Bamboo from "./img/bamboo.png";
import k8 from "./img/k8.png";
import Postgres from "./img/postgres.png";
import Mysql from "./img/mysql.png";

function Skills(){
    return(
        <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                        <li className="list-inline-item"><img className="icon" id="gopher" src={Gopher} alt="gopher" title="gopher"/></li>
                        <li className="list-inline-item"><img className="icon" id="csharp" src={Csharp} alt=".net c#" title=".net c#"/></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-bitbucket"></i></li>
                        <li className="list-inline-item"><i className="fab fa-jenkins"></i></li>
                        <li className="list-inline-item"><img className="icon" id="k8" src={k8} alt="k8" title="k8"/></li>
                        <li className="list-inline-item"><img className="icon" id="bamboo" src={Bamboo} alt="bamboo" title="bamboo"/></li>
                        <li className="list-inline-item"><img className="icon" id="postgres" src={Postgres} alt="postgres" title="postgres"/></li>
                        <li className="list-inline-item"><img className="icon" id="mysql" src={Mysql} alt="mysql" title="mysql"/></li>
                    </ul>
                    <div className="subheading mb-3">Skill Summary</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Able to work effectively in a team to achieve optimal outcome
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Knowledgeable in project management tools, processes, and techniques
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Strong communication, interpersonal and presentation skills
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            );
}

export default Skills;