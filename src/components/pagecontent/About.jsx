import React from 'react';

function About(){
    return(
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Rochelle<span className="text-primary"> Gracias</span>
                </h1>
                <div className="subheading mb-5">
                    Sydnwy, NSW, Australia · <a href="mailto:dummy.mail@gmail.com">dummy.mail@gmail.com</a>
                </div>
                <p className="lead mb-3">A software engineer passionate about learning and finding new solutions that could contribute to the organization's growth and simultaneously further develop my skills. A self-motivated and driven person with good communication skills able to work efficiently in a team.</p>
                <p className="lead mb-3">Experienced in Microservice Architecture, Go, Java, React, and version control tools like GitHub, Bitbucket.</p>
                <p className="lead mb-5">Knowledgeable in Azure, AWS, Jenkins, Kubernetes, and Docker.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/graciasrochelle/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/graciasrochelle?tab=repositories"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About;