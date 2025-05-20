import React from 'react';
import '/src/assets/css/projects.css';

const Projects = () => {
    const projects = [
        {
            title: "TrackIT - Quick Commerce Price Tracker",
            image: "/img/projects/trackit.jpg",
            description: "A sophisticated web scraping system that tracks real-time product details from multiple quick commerce platforms (Zepto, Blinkit, Instamart). Features include automated execution via Apache Airflow, IP rotation for reliable scraping, S3 integration for data storage, and a custom admin panel with real-time analytics dashboard. The system uses microservices architecture with RabbitMQ for real-time updates.",
            techStack: ["Python", "FastAPI", "SQLAlchemy", "Pandas", "Selenium", "AWS (S3, EC2, RDS)", "Airflow", "RabbitMQ", "Celery", "Redis", "Tailwind CSS", "JavaScript"]
        },
        {
            title: "OneHeartMarket - Professional Network Platform",
            image: "/img/projects/oneheart.jpg",
            description: "A professional networking platform similar to LinkedIn but focused on non-tech professionals. Features include user and business profiles, job posting and applications, CV creation, social features (following, posts, likes, comments), real-time chat with WebSocket, role-based access control, and payment integration. Includes comprehensive API testing and containerization.",
            techStack: ["Django REST Framework", "MySQL", "MongoDB", "Pytest", "React", "Docker", "Firebase", "Stripe", "WebSocket", "JWT", "Swagger"]
        },
        {
            title: "Billing System - Invoice Management Platform",
            image: "/img/projects/billing.jpg",
            description: "A comprehensive invoice management system with strong authentication including two-step verification via Google Authenticator. Features include CRUD operations for customers, sellers, categories, and products, automated PDF invoice generation with QR codes, Dropbox integration for document storage, and direct email delivery of invoices. Includes Stripe payment gateway integration for wallet and transaction management.",
            techStack: ["Django", "Django REST Framework", "PostgreSQL", "Swagger", "Dropbox API", "Twilio", "Stripe", "JIRA", "Google Authenticator"]
        },
        {
            title: "Diamond Business Showcase Website",
            image: "/img/projects/diamond.jpg",
            description: "A professional showcase website for a diamond business owner featuring 8 informative pages including home, about, services, portfolio, and contact pages. Includes a streamlined admin panel for content management, allowing easy updates to product showcases, business information, and contact details. The website is optimized for performance and SEO, with responsive design for all devices.",
            techStack: ["Python", "Django", "Django REST Framework", "HTML5", "CSS3", "JavaScript", "Hostinger"]
        },
        {
            title: "Domestic Billing Desktop Application",
            image: "/img/projects/desktop.jpg",
            description: "A desktop application built with Tkinter for managing and generating bills for domestic clients. Features include a user-friendly GUI for data entry, automated PDF bill generation using ReportLab, data storage in local Excel files, and data analysis capabilities. The application provides a simple interface for small businesses to manage their billing and client information efficiently.",
            techStack: ["Python", "Tkinter", "ReportLab", "Pandas", "NumPy", "Excel Integration", "PDF Generation"]
        }
    ];

    return (
        <section id="projects">
            <div className="projects-container">
                <h1 className="projects-heading">My Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-info">
                                    <h2>{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <div className="tech-stack">
                                        <h3>Tech Stack</h3>
                                        <div className="tech-tags">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 