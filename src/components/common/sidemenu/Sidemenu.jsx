import React from 'react';
import "./Sidemenu.css";
import ProfileImage from "./profile_image.jpeg";
import { SidemenuData } from './SidemenuData';
import { Link } from 'react-router-dom';

function Sidemenu(){
    return(
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <Link className="navbar-brand" to="/" >
                    <span className="d-block d-lg-none">Rochelle Gracias</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ProfileImage} alt="..." /></span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        {SidemenuData.map((item, index) => {
                            return (
                                <li key={index} className="nav-item">
                                <Link className="nav-link" to={item.path} >
                                    <span>{item.title}</span>
                                </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Sidemenu;