import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubUrl: '',
    demoUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      if (!formData.title || !formData.description) {
        alert('Please enter all required fields.');
        return;
      }
      
      // Post data to backend
      await axios.post('https://serverless-zeta-pearl.vercel.app/projects', formData);
      alert('Project added successfully!');
      
      // Clear form after submission
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        githubUrl: '',
        demoUrl: ''
      });
    } catch (error) {
      console.error('Error adding project:', error);
      alert('An error occurred while adding the project. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title *</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description *</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">GitHub URL</label>
          <input type="text" className="form-control" name="githubUrl" value={formData.githubUrl} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Demo URL</label>
          <input type="text" className="form-control" name="demoUrl" value={formData.demoUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
