import React from 'react';

function Experience(){
    return(
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Engineer (Full time)</h3>
                        <div className="subheading mb-3">Atlassian Pty Ltd., Sydney, Australia</div>
                        <p>Backend java engineer working on decomposing permissions from the monolith into microservices.</p>
                    </div>
                <div className="flex-shrink-0"><span className="text-primary">Oct 2020 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Developer (Full time)</h3>
                        <div className="subheading mb-3">Webjet Limited, Melbourne, Australia</div>
                        <p>Worked with microservices that were loosely coupled and independently deployable. Test driven development using React, GoLang, and Asp.Net. Gained experience in Docker, Kubernetes, jenkins and Azure blob containers.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">Mar 2019 - Sept 2020</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Developer (Casual)</h3>
                        <div className="subheading mb-3">RMIT University, Australia</div>
                           <p>Developed and maintained an existing Web front-end and back-end. Implemented front-end design changes and liaising with UX designer(s). Implemented back-end changes to Web App functionality and API. Application system built using Razor using C# programming language. Ability to meet deadlines. Strong interpersonal skills - Ability to meet with client and gather requirements</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">Jun - Nov 2018</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Web Intern (Full time)</h3>
                        <div className="subheading mb-3">Redbubble Melbourne, Australia</div>
                        <p>Completed a 3 month summer internship at Redbubble where I learned how to effectively work in an agile environment. The internship was part of the Tin Alley beta program (tinalleybeta.com) in 2017. During this internship, worked closely with the search experience team. Built A/B experiments using React and Ruby for quantitative validation of product ideas. Was part of the whiteboard discussions on product ideas providing valuable input towards architecture design. Developed and wrote production ready code and test case using React. Took initiative to organise and participate in an intern swap that enabled a broader understanding of the product. Gained knowledge and understanding on tools like Trello, Confluence, Github, CI/CD processes based on Docker, Buildkite, Kubernetes and AWS.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">Dec 2017 - Mar 2018</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Assistant Programmer (Full time)</h3>
                        <div className="subheading mb-3">National Informatics Center, Goa, India</div>
                        <p>Met with clients to understand their requirements for software features that needed to be developed. Brainstorming ideas on efficiently designing and implementing the new features into the existing system. Delivered and developed software using C#, vb.net, MySQL, HTML and CSS. Provided maintenance of the developed system and conducted training for clients on how to use the new system. Created a user manual on the systems created for various client.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">Jun 2015 - Dec 2016</span></div>
                </div>
            </div>
        </section>
    );
}

export default Experience;