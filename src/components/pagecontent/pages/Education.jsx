import React from 'react';
import { EducationPageData } from "./PageData"

function Education(){
    return(
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                {EducationPageData.map((item, index) => {
                    return(
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{item.name}</h3>
                                <div className="subheading mb-3">{item.degree}</div>
                                <p>{item.grade}</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{item.from} - {item.to}</span></div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Education;