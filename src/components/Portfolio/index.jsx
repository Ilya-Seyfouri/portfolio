import React from "react";
import Loader from "react-loaders";
import "./index.scss";
import care1 from'./images/care1.jpg'

const portfolioData = {
    portfolio: [
        {
            title: "CareView",
            cover: care1,
            url: "https://careview-backend-production.up.railway.app/",
            youtubeDemo: "https://www.youtube.com/embed/V78btCnI87Y",
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
                    <ul>
                        <li><strong>Care Tracking:</strong> Digital visit logs and resident notes upon visits</li>
                        <li><strong>Staff Scheduling:</strong> Shift management with schedule overlap prevention</li>
                        <li><strong>Family Portal:</strong> Real-time updates allowing families to stay informed about their loved ones</li>
                        <li><strong>Role-Based Access:</strong> Secure authentication with manager, carer, and family permission levels</li>
                    </ul>

                    <h3>Technical Implementation:</h3>
                    <ul>
                        <li><strong>Backend:</strong> FastAPI with PostgreSQL</li>
                        <li><strong>Frontend:</strong> ReactJS</li>
                        <li><strong>Authentication:</strong> JWT tokens with password hashing</li>
                        <li><strong>Database Design:</strong> One user table with an assignments table to map out many-to-many relationships</li>
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