import React from 'react';
import { AboutPageData } from "./PageData"

function About(){
    return(
        <section className="resume-section about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    {AboutPageData.firstName}<span className="text-primary"> {AboutPageData.lastName}</span>
                </h1>
                <div className="subheading mb-5">
                    {AboutPageData.address} · {AboutPageData.phoneNumber} · <a href="mailto:gracias.rochelle@gmail.com">gracias.rochelle@gmail.com</a>
                </div>
                {AboutPageData.content.map((item, index) => {
                    return (
                        <p className={item.style}>{item.data}</p>
                    );
                })}
                <div className="social-icons">
                    {AboutPageData.socialMedia.map((item, index) => {
                        return (
                            <a className="social-icon" href={item.link}><i className={"fab " + item.icon}></i></a>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default About;