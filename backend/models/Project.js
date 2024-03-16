import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  demoUrl: {
    type: String
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
