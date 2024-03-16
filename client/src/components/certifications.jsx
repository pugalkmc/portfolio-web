import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Certifications.css';

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('https://serverless-zeta-pearl.vercel.app/certificates');
      setCertificates(response.data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Certifications</h2>
      <div className="row">
        {certificates.map((certificate) => (
          <div key={certificate._id} className="col-md-6">
            <div className="card mb-4">
              <img src={certificate.imageUrl} className="card-img-top" alt="Certificate" />
              <div className="card-body">
                <h5 className="card-title">{certificate.name}</h5>
                <p className="card-text">{certificate.description}</p>
                <p className="card-text"><small className="text-muted">Certificate Date: {certificate.date}</small></p>
                {certificate.link && <a href={certificate.link} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">View Certificate</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
