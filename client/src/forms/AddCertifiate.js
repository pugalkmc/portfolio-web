import React, { useState } from 'react';
import axios from 'axios';

const AddCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    link: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      if (!formData.name || !formData.description) {
        alert('Please enter all required fields.');
        return;
      }
      
      // Post data to backend
      await axios.post('https://backend-chi-topaz.vercel.app/certificates', formData);
      alert('Certificate added successfully!');
      
      // Clear form after submission
      setFormData({
        name: '',
        description: '',
        imageUrl: '',
        link: '',
        date: ''
      });
    } catch (error) {
      console.error('Error adding certificate:', error);
      alert('An error occurred while adding the certificate. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add Certificate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
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
          <label className="form-label">Link</label>
          <input type="text" className="form-control" name="link" value={formData.link} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddCertificate;
