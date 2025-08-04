import React from "react";
import Loader from "react-loaders";
import "./index.scss";
import care1 from'./images/care1.jpg'

const portfolioData = {
    portfolio: [
        {
            title: "CareView",
            cover: care1,
            url: "https://careview.up.railway.app/",
            youtubeDemo: "https://www.youtube.com/embed/gxm6m2cMNlE",
        }
    ]
};

const Portfolio = () => {
    const renderPortfolio = (portfolio) => { 
        return (
            <div className="portfolio-showcase">
                {

                    
                    portfolio.map((port, idx) => {
                        return (
                            
                            <div key={idx} className="project-display">
                                <div className="project-info">
                                    <div className="image-box">
                                        <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                                        <div className="content">
                                            <p className="title">{port.title}</p>
                                            <h4 className="description">{port.description}</h4>
                                            <button className="btn" onClick={() => window.open(port.url)}>Visit Project</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="video-demo">
                                    <div className="video-wrapper">
                                        <iframe
                                            src={port.youtubeDemo}
                                            title="Project Demo"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                {/* Project Description Section */}
                <br></br>
                <br></br>
                <br></br>

                <div className="project-description">
                    <h2>CareView - Care Home Management System</h2>
                    <p>
                        A digital platform built for professional healthcare facilities to streamline care tracking, staff coordination, and family communication. Built for an actual care home facility - not just a prototype.
                    </p>
                    
                    
                    <h3>Key Features:</h3>
                    <ul className="features-list">
                        <li className="feature-item"><span className="feature-label">Care Tracking:</span> Digital visit logs and resident notes upon visits</li>
                        <li className="feature-item"><span className="feature-label">Staff Scheduling:</span> Shift management with schedule overlap prevention</li>
                        <li className="feature-item"><span className="feature-label">Family Portal:</span> Real-time updates allowing families to stay informed about their loved ones</li>
                        <li className="feature-item"><span className="feature-label">Role-Based Access:</span> Secure authentication with manager, carer, and family permission levels</li>
                    </ul>

                    <h3>Technical Implementation:</h3>
                    <ul className="tech-list">
                        <li className="tech-item"><span className="tech-label">Backend:</span> FastAPI with PostgreSQL</li>
                        <li className="tech-item"><span className="tech-label">Frontend:</span> ReactJS</li>
                        <li className="tech-item"><span className="tech-label">Authentication:</span> JWT tokens with password hashing</li>
                        <li className="tech-item"><span className="tech-label">Database Design:</span> One user table with an assignments table to map out many-to-many relationships</li>
                    </ul>
                    
                   
                    
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div className="container portfolio-page">
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Portfolio