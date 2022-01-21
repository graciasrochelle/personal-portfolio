import React from 'react';

function Certificates(){
    return(
        <section className="resume-section" id="certificates">
            <div className="resume-section-content">
                <h2 className="mb-5">Certificates</h2>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                        <a href="https://www.youracclaim.com/badges/f14b2144-71c7-4869-9100-d52b6a4d40f3/public_url">Microsoft Certified: Azure Fundamentals (2020)</a>
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                        Salesforce Bootcamp (2018)
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Certificates;