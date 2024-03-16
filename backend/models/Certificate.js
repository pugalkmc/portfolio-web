import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  name: {
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
  link: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
