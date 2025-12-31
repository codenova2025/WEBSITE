// // src/components/Registration.jsx

// import React, { useState } from 'react';
// import { Mail, User, Phone, BookOpen, Building2, MapPin, Calendar, Link2, Github, Linkedin, FileText, Send } from 'lucide-react';
// import axios from 'axios';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     whatsapp: '',
//     course: '',
//     branch: '',
//     year: '',
//     college: '',
//     state: '',
//     passingYear: '',
//     domain: '',
//     duration: '',
//     portfolio: '',
//     github: '',
//     linkedin: '',
//     whyHire: '',
//     hearAbout: '',
//     resumeUrl: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const states = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//     'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
//     'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
//     'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
//     'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
//     'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
//   ].sort();

//   const domains = [
//     'Frontend Development', 'Backend Development', 'MERN Stack Development', 'C Programming', 'Python Programming', 'AI & ML', 'Figma and UI/UX', 'Data Analytics'
//   ];

//   const durations = ['1 Month', '2 Months', '3 Months'];

//   const hearOptions = ['LinkedIn', 'College', 'Friends/Students', 'Instagram', 'Website'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     console.log(`Field updated: ${name} = ${value}`);
//   };

//   const validate = () => {
//     let tempErrors = {};

//     if (!formData.name.trim()) tempErrors.name = 'Name is required';
//     if (!formData.email.trim()) tempErrors.email = 'Email is required';
//     if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) tempErrors.mobile = 'Valid 10-digit mobile required';
//     if (!formData.whatsapp || !/^\d{10}$/.test(formData.whatsapp)) tempErrors.whatsapp = 'Valid 10-digit WhatsApp required';
//     if (!formData.course.trim()) tempErrors.course = 'Course is required';
//     if (!formData.branch.trim()) tempErrors.branch = 'Branch is required';
//     if (!formData.year.trim()) tempErrors.year = 'Current year is required';
//     if (!formData.college.trim()) tempErrors.college = 'College name is required';
//     if (!formData.state) tempErrors.state = 'State is required';
//     if (!formData.passingYear.trim()) tempErrors.passingYear = 'Passing year is required';
//     if (!formData.domain) tempErrors.domain = 'Internship domain is required';
//     if (!formData.duration) tempErrors.duration = 'Preferred duration is required';
//     if (!formData.whyHire.trim() || formData.whyHire.trim().split(/\s+/).length < 10)
//       tempErrors.whyHire = 'Minimum 10 words required';
//     if (!formData.hearAbout) tempErrors.hearAbout = 'This field is required';
//     if (!formData.resumeUrl.trim()) tempErrors.resumeUrl = 'Resume URL is required';

//     setErrors(tempErrors);
//     console.log('Validation errors:', tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);

//     if (!validate()) {
//       console.log('Validation failed');
//       return;
//     }

//     setLoading(true);
//     try {
//       console.log('Sending request to backend...');
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/register`,
//         formData
//       );
//       console.log('Success response:', response.data);
//       alert('Application submitted successfully! Check your email for confirmation.');
//       // Optional: reset form
//       // setFormData({ ...initialState });
//     } catch (error) {
//       console.error('Submission error:', error.response?.data || error.message);
//       alert('Error: ' + (error.response?.data?.message || 'Something went wrong'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Internship Application Form</h1>
//           <p className="text-lg text-gray-600">Join our hands-on internship program and kickstart your career!</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
//           <form onSubmit={handleSubmit} className="space-y-8">

//             {/* Personal Info */}
//             <div className="space-y-6">
//               <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-3">
//                 <User className="w-7 h-7" /> Personal Information
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                   <input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="Enter your full name"
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
//                       placeholder="you@example.com"
//                     />
//                   </div>
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
//                       placeholder="10-digit Indian number"
//                       maxLength="10"
//                     />
//                   </div>
//                   {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input
//                       name="whatsapp"
//                       value={formData.whatsapp}
//                       onChange={handleChange}
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
//                       placeholder="10-digit number"
//                       maxLength="10"
//                     />
//                   </div>
//                   {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Academic Info */}
//             <div className="space-y-6">
//               <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-3">
//                 <BookOpen className="w-7 h-7" /> Academic Details
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
//                   <input name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="e.g., B.Tech, BCA" />
//                   {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Branch *</label>
//                   <input name="branch" value={formData.branch} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="e.g., CSE, IT" />
//                   {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Current Year *</label>
//                   <input name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="e.g., 3rd Year" />
//                   {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">College Name *</label>
//                   <div className="relative">
//                     <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input name="college" value={formData.college} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg" placeholder="Full college name" />
//                   </div>
//                   {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <select name="state" value={formData.state} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg">
//                       <option value="">Select your state</option>
//                       {states.map(state => <option key={state} value={state}>{state}</option>)}
//                     </select>
//                   </div>
//                   {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing *</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input name="passingYear" value={formData.passingYear} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg" placeholder="e.g., 2026" />
//                   </div>
//                   {errors.passingYear && <p className="text-red-500 text-sm mt-1">{errors.passingYear}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Internship Preferences */}
//             <div className="space-y-6">
//               <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-3">
//                 <Send className="w-7 h-7" /> Internship Preferences
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Domain *</label>
//                   <select name="domain" value={formData.domain} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
//                     <option value="">Choose domain</option>
//                     {domains.map(d => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                   {errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Duration *</label>
//                   <select name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
//                     <option value="">Select duration</option>
//                     {durations.map(d => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                   {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Links (Optional) */}
//             <div className="space-y-6">
//               <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-3">
//                 <Link2 className="w-7 h-7" /> Links (Optional)
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio URL</label>
//                   <div className="relative">
//                     <Link2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg" placeholder="https://yourportfolio.com" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
//                   <div className="relative">
//                     <Github className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input name="github" value={formData.github} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg" placeholder="https://github.com/username" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
//                   <div className="relative">
//                     <Linkedin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                     <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border rounded-lg" placeholder="https://linkedin.com/in/username" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Resume URL (Google Drive Public Link) *</label>
//                   <div className="relative">
//                     <FileText className="absolute left-3 top-10 h-5 w-5 text-gray-400" />
//                     <textarea
//                       name="resumeUrl"
//                       value={formData.resumeUrl}
//                       onChange={handleChange}
//                       rows="2"
//                       className="w-full pl-12 pr-4 py-3 border rounded-lg"
//                       placeholder="Paste public Google Drive link here"
//                     />
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Upload to Drive → Share → "Anyone with link" → Copy link
//                   </p>
//                   {errors.resumeUrl && <p className="text-red-500 text-sm mt-1">{errors.resumeUrl}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Why should we hire you? (Min 10 words) *</label>
//                 <textarea
//                   name="whyHire"
//                   value={formData.whyHire}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-4 py-3 border rounded-lg"
//                   placeholder="Tell us about your skills, passion, and what makes you a great fit..."
//                 />
//                 {errors.whyHire && <p className="text-red-500 text-sm mt-1">{errors.whyHire}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us? *</label>
//                 <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
//                   <option value="">Select an option</option>
//                   {hearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                 </select>
//                 {errors.hearAbout && <p className="text-red-500 text-sm mt-1">{errors.hearAbout}</p>}
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="text-center pt-8">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg transition transform hover:scale-105 disabled:opacity-70"
//               >
//                 {loading ? 'Submitting...' : 'Submit Application'}
//                 <Send className="w-6 h-6" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// new
// src/components/Registration.jsx

import React, { useState, useRef } from 'react';
import {
  Mail, User, Phone, BookOpen, Building2, MapPin, Calendar,
  Link2, Github, Linkedin, FileText, Send, Loader2
} from 'lucide-react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    whatsapp: '',
    course: '',
    branch: '',
    year: '',
    college: '',
    state: '',
    passingYear: '',
    domain: '',
    duration: '',
    portfolio: '',
    github: '',
    linkedin: '',
    whyHire: '',
    hearAbout: '',
    resumeUrl: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ].sort();

  const domains = [
    'Frontend', 'Backend', 'MERN Stack', 'C Programming', 'Python Programming',
    'AI & ML', 'Figma and UI/UX', 'Data Analytics'
  ];

  const durations = ['1 Month', '2 Months', '3 Months'];

  const hearOptions = ['LinkedIn', 'College', 'Friends/Students', 'Instagram', 'Website'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`Field updated: ${name} = ${value}`);
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    console.log('File selected:', file?.name, file?.type, file?.size ? `${(file.size / 1024).toFixed(2)} KB` : 'unknown size');

    if (!file) {
      console.log('No file selected');
      return;
    }

    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file only.');
      console.log('Invalid file type:', file.type);
      return;
    }

    if (file.size > 500 * 1024) {
      alert('File size must be less than 500 KB.');
      console.log('File too large:', file.size, 'bytes');
      return;
    }

    setResumeFile(file);
    setUploading(true);
    console.log('Starting upload to Cloudinary...');

    const uploadFormData = new FormData();
    uploadFormData.append('file', file);
    uploadFormData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    uploadFormData.append('folder', 'internship-resumes');
    uploadFormData.append('resource_type', 'raw');
    uploadFormData.append('quality', 'auto');
    uploadFormData.append('fetch_format', 'auto');

    try {
      console.log('Sending request to Cloudinary...');
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: 'POST',
          body: uploadFormData,
        }
      );

      const data = await response.json();
      console.log('Cloudinary full response:', data);

      if (data.secure_url) {
        setFormData(prev => ({ ...prev, resumeUrl: data.secure_url }));
        console.log('Resume uploaded successfully! Secure URL:', data.secure_url);
        alert('Resume uploaded successfully!');
      } else {
        throw new Error(data.error?.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      alert('Failed to upload resume. Please try again.');
      setResumeFile(null);
      setFormData(prev => ({ ...prev, resumeUrl: '' }));
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    if (!/^\d{10}$/.test(formData.mobile)) tempErrors.mobile = 'Valid 10-digit mobile required';
    if (!/^\d{10}$/.test(formData.whatsapp)) tempErrors.whatsapp = 'Valid 10-digit WhatsApp required';
    if (!formData.course.trim()) tempErrors.course = 'Course is required';
    if (!formData.branch.trim()) tempErrors.branch = 'Branch is required';
    if (!formData.year.trim()) tempErrors.year = 'Current year is required';
    if (!formData.college.trim()) tempErrors.college = 'College name is required';
    if (!formData.state) tempErrors.state = 'State is required';
    if (!formData.passingYear.trim()) tempErrors.passingYear = 'Passing year is required';
    if (!formData.domain) tempErrors.domain = 'Internship domain is required';
    if (!formData.duration) tempErrors.duration = 'Preferred duration is required';
    if (!formData.whyHire.trim() || formData.whyHire.trim().split(/\s+/).length < 10)
      tempErrors.whyHire = 'Minimum 10 words required';
    if (!formData.hearAbout) tempErrors.hearAbout = 'This field is required';
    if (!formData.resumeUrl) tempErrors.resumeUrl = 'Please upload your resume';

    setErrors(tempErrors);
    console.log('Validation result:', Object.keys(tempErrors).length === 0 ? 'Passed' : 'Failed', tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started with data:', formData);

    if (!validate()) {
      console.log('Validation failed');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending data to backend...');
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/register`,
        formData
      );
      console.log('Backend success response:', response.data);

      alert('Application submitted successfully! Check your email for confirmation.');

      setFormData({
        name: '', email: '', mobile: '', whatsapp: '', course: '', branch: '',
        year: '', college: '', state: '', passingYear: '', domain: '', duration: '',
        portfolio: '', github: '', linkedin: '', whyHire: '', hearAbout: '', resumeUrl: ''
      });
      setResumeFile(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = '';

      console.log('Form fully reset after successful submission');
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('Error: ' + (error.response?.data?.message || 'Something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black pt-6 sm:pt-16 md:pt-24 pb-32 sm:pb-24 md:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-8 sm:mb-10 mt-14">
            Internship Application Form
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Join our hands-on internship program and kickstart your career with real-world experience
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 p-6 sm:p-8 md:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12 md:space-y-14">

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 flex items-center gap-3">
                <User className="w-6 h-6 sm:w-7 sm:h-7" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="Enter your full name" />
                  {errors.name && <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="email" type="email" value={formData.email} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="you@example.com" />
                  </div>
                  {errors.email && <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="mobile" value={formData.mobile} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="10-digit Indian number" maxLength="10" />
                  </div>
                  {errors.mobile && <p className="text-red-400 text-sm mt-1.5">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="10-digit number" maxLength="10" />
                  </div>
                  {errors.whatsapp && <p className="text-red-400 text-sm mt-1.5">{errors.whatsapp}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 flex items-center gap-3">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" /> Academic Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Course *</label>
                  <input name="course" value={formData.course} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="e.g., B.Tech, BCA" />
                  {errors.course && <p className="text-red-400 text-sm mt-1.5">{errors.course}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Branch *</label>
                  <input name="branch" value={formData.branch} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="e.g., CSE, IT" />
                  {errors.branch && <p className="text-red-400 text-sm mt-1.5">{errors.branch}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Year *</label>
                  <input name="year" value={formData.year} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="e.g., 3rd Year" />
                  {errors.year && <p className="text-red-400 text-sm mt-1.5">{errors.year}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">College Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="college" value={formData.college} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="Full college name" />
                  </div>
                  {errors.college && <p className="text-red-400 text-sm mt-1.5">{errors.college}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">State *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 pointer-events-none z-10" />
                    <select name="state" value={formData.state} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" className="bg-gray-900">Select your state</option>
                      {states.map(state => <option key={state} value={state} className="bg-gray-900">{state}</option>)}
                    </select>
                  </div>
                  {errors.state && <p className="text-red-400 text-sm mt-1.5">{errors.state}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Year of Passing *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="passingYear" value={formData.passingYear} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="e.g., 2026" />
                  </div>
                  {errors.passingYear && <p className="text-red-400 text-sm mt-1.5">{errors.passingYear}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 flex items-center gap-3">
                <Send className="w-6 h-6 sm:w-7 sm:h-7" /> Internship Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Domain *</label>
                  <select name="domain" value={formData.domain} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-gray-900">Choose domain</option>
                    {domains.map(d => <option key={d} value={d} className="bg-gray-900">{d}</option>)}
                  </select>
                  {errors.domain && <p className="text-red-400 text-sm mt-1.5">{errors.domain}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Duration *</label>
                  <select name="duration" value={formData.duration} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-gray-900">Select duration</option>
                    {durations.map(d => <option key={d} value={d} className="bg-gray-900">{d}</option>)}
                  </select>
                  {errors.duration && <p className="text-red-400 text-sm mt-1.5">{errors.duration}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 flex items-center gap-3">
                <Link2 className="w-6 h-6 sm:w-7 sm:h-7" /> Links & Resume
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio URL (Optional)</label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="portfolio" value={formData.portfolio} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="https://yourportfolio.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Profile (Optional)</label>
                  <div className="relative">
                    <Github className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="github" value={formData.github} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="https://github.com/username" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile (Optional)</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                    <input name="linkedin" value={formData.linkedin} onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="https://linkedin.com/in/username" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Resume (PDF only, max 500 KB) *
                  </label>
                  <div className="border-2 border-dashed border-gray-700 bg-gray-900/40 rounded-xl p-6 sm:p-8 text-center hover:border-cyan-500 transition-all duration-300">
                    <FileText className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-gray-500 mb-4" />
                    <div className="mt-4">
                      <label className="cursor-pointer">
                        <span className={`bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-2.5 px-6 sm:px-8 rounded-lg inline-block transition-all duration-300 transform hover:scale-105 ${uploading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                          {uploading ? 'Uploading...' : 'Choose PDF File'}
                        </span>
                        <input
                          type="file"
                          accept="application/pdf"
                          onChange={handleResumeUpload}
                          className="hidden"
                          ref={fileInputRef}
                          disabled={uploading}
                        />
                      </label>
                    </div>

                    {resumeFile && uploading && (
                      <p className="mt-4 text-sm text-cyan-400 flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Uploading your resume...
                      </p>
                    )}

                    {resumeFile && !uploading && formData.resumeUrl && (
                      <p className="mt-4 text-sm text-green-400 font-semibold">
                        ✅ {resumeFile.name} ({(resumeFile.size / 1024).toFixed(2)} KB) uploaded successfully!
                      </p>
                    )}

                    {errors.resumeUrl && <p className="text-red-400 text-sm mt-2">{errors.resumeUrl}</p>}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    File will be securely uploaded and optimized automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why should we hire you? (Min 10 words) *
                </label>
                <textarea name="whyHire" value={formData.whyHire} onChange={handleChange}
                  rows="5" className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-none"
                  placeholder="Tell us about your skills, passion, and what makes you a great fit..." />
                {errors.whyHire && <p className="text-red-400 text-sm mt-1.5">{errors.whyHire}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">How did you hear about us? *</label>
                <select name="hearAbout" value={formData.hearAbout} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/70 border-2 border-gray-700 text-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer">
                  <option value="" className="bg-gray-900">Select an option</option>
                  {hearOptions.map(opt => <option key={opt} value={opt} className="bg-gray-900">{opt}</option>)}
                </select>
                {errors.hearAbout && <p className="text-red-400 text-sm mt-1.5">{errors.hearAbout}</p>}
              </div>
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <button
                type="submit"
                disabled={loading || uploading}
                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-600 via-blue-600 to-teal-600 hover:from-cyan-500 hover:via-blue-500 hover:to-teal-500 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-12 rounded-xl text-base sm:text-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-50 sm:min-w-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
