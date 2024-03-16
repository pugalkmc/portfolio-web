import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css'; // Import your custom CSS file for project styles

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://serverless-zeta-pearl.vercel.app/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p><strong>Start Date:</strong> {project.startDate}</p>
                <p><strong>End Date:</strong> {project.endDate}</p>
                {project.documentationLink && (
                  <p><strong>Documentation:</strong> <a href={project.documentationLink} target="_blank" rel="noopener noreferrer">Link</a></p>
                )}
                {project.achievements && (
                  <div>
                    <p><strong>Achievements:</strong> {project.achievements}</p>
                    {project.certificateImageUrl && (
                      <p><strong>Certificate:</strong> <img src={project.certificateImageUrl} alt="Certificate" className="certificate-img" /></p>
                    )}
                  </div>
                )}
              </div>
              <div className="card-footer">
                <a href={project.githubUrl} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demoUrl && (
                  <a href={project.demoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
