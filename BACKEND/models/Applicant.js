// backend/models/Applicant.js

const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  whatsapp: { type: String, required: true },
  course: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  college: { type: String, required: true },
  state: { type: String, required: true },
  passingYear: { type: String, required: true },
  domain: { type: String, required: true },
  duration: { type: String, required: true },
  portfolio: { type: String },
  github: { type: String },
  linkedin: { type: String },
  whyHire: { type: String, required: true },
  hearAbout: { type: String, required: true },
  resumeUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Applicant', applicantSchema);