import React from 'react';
import { ExperiencePageData } from "./PageData"

function Experience(){
    return(
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {ExperiencePageData.map((item, index) => {
                    return (
                        <div className={"d-flex flex-column flex-md-row justify-content-between " + item.style}>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{item.designation}</h3>
                                <div className="subheading mb-3">{item.company}</div>
                                <p>{item.summary}</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{item.from} - {item.to}</span></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experience;