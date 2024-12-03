import React, { useState } from "react";
import "../styles/ProjectSection.css"

function ProjectSection(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        {
          id: 1,
          title: "Project 1",
          description: "Description of Project 1",
          techStack: ["React", "Node.js", "MongoDB"],
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description of Project 2",
          techStack: ["Java", "Spring Boot", "MySQL"],
        },
        {
          id: 3,
          title: "Project 3",
          description: "Description of Project 3",
          techStack: ["Python", "Django", "PostgreSQL"],
        },
        {
          id: 4,
          title: "Project 4",
          description: "Description of Project 4",
          techStack: ["Angular", "Firebase"],
        },
        {
          id: 5,
          title: "Project 5",
          description: "Description of Project 5",
          techStack: ["Golang", "Gin", "SQLite"],
        },
      ];   
    const maxVisibleProjects = 3;
    const handleNext = () => {
        if (currentIndex < projects.length - maxVisibleProjects) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };

    return (

      <div className="Projects">
        <h2>PROJECTS</h2>
        <div className="project-section">
            
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="nav-button"
            >
            Prev
            </button>
            <div className="project-container">
                {projects
                .slice(currentIndex, currentIndex + maxVisibleProjects)
                .map((project) => (
                    <div key={project.id} className="project-box">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            <h4>Tech Stack:</h4>
                            <ul>
                                {project.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleNext}
                disabled={currentIndex === projects.length - maxVisibleProjects}
                className="nav-button"
            >
                Next
            </button>
        </div>

      </div>

        
    );
};
export default ProjectSection;