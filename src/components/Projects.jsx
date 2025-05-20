import React from 'react';
import '/src/assets/css/projects.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            image: "/img/projects/ecommerce.jpg",
            description: "A full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and secure payment integration. Implemented real-time inventory management and order tracking system.",
            techStack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Redis"]
        },
        {
            title: "Task Management System",
            image: "/img/projects/taskmanager.jpg",
            description: "A collaborative task management system with real-time updates, task assignment, progress tracking, and team collaboration features. Includes dashboard analytics and reporting capabilities.",
            techStack: ["FastAPI", "React", "MongoDB", "Docker", "WebSocket", "JWT"]
        },
        {
            title: "Data Automation Pipeline",
            image: "/img/projects/automation.jpg",
            description: "Automated data processing pipeline that extracts, transforms, and loads data from multiple sources. Features include scheduled jobs, error handling, and data validation.",
            techStack: ["Python", "Apache Airflow", "Pandas", "MySQL", "Docker", "AWS S3"]
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