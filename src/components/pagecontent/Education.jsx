import React from 'react';

function Education(){
    return(
        <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">RMIT University (Melbourne, Australia)</h3>
                            <div className="subheading mb-3">Master of Information Technology</div>
                            <p>Cumulative GPA: 3.8</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Feburary 2017 - December 2018</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Padre Conceicao College of Engineering (Goa, India)</h3>
                            <div className="subheading mb-3">Bachelor of Computer Engineering</div>
                            <p>First class with distinction</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2010 - August 2014</span></div>
                    </div>
                </div>
            </section>
    );
}

export default Education;