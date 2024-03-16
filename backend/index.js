import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Project from './models/Project.js';
import Certificate from './models/Certificate.js';
import morgan from 'morgan';

const app = express();

mongoose.connect('mongodb+srv://pugalkmc:pugalkmc@cluster0.dzcnjxc.mongodb.net/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());
app.use(cors());
app.use(morgan())

app.get('/', (req, res)=> {
  return res.json({message:'success'})
})

// Routes
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/projects', async (req, res) => {
    try {
      const { title, description, imageUrl, githubUrl, demoUrl } = req.body;
  
      // Validate required fields
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required fields.' });
      }
  
      // Create new project
      const project = new Project({
        title,
        description,
        imageUrl,
        githubUrl,
        demoUrl
      });
  
      await project.save();
  
      res.status(201).json({ message: 'Project added successfully.' });
    } catch (error) {
      console.error('Error adding project:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/certificates', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    console.error('Error fetching certificates:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/certificates', async (req, res) => {
    try {
      const { name, description, imageUrl, link, date } = req.body;
      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required fields.' });
      }
      const certificate = new Certificate({
        name,
        description,
        imageUrl,
        link,
        date
      });
  
      await certificate.save();
  
      res.status(201).json({ message: 'Certificate added successfully.' });
    } catch (error) {
      console.error('Error adding certificate:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

export default app;
