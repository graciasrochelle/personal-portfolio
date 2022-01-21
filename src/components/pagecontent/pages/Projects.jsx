import React from 'react';
import { ProjectPageData } from "./PageData";

function Projects(){
    return(
        <section className="resume-section" id="projects">
             <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <ul className="fa-ul mb-0">
                    {ProjectPageData.map((item, index) => {
                        return (
                            <li>
                                <span className="fa-li"><i className="fas fa-arrow-right text-warning"></i></span>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Projects;