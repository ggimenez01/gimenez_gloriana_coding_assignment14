import React from 'react';
import './BasicInfo.css'; // Import the CSS file for additional styling

function BasicInfo() {
  return (
    <div className="basic-info-container">
      <h2>Basic Information / Introduction</h2>
      
      <div className="profile-section">
        <h3>Content Management System, Red River College Polytechnic, Winnipeg, Manitoba</h3>
        <p>April 2023</p>
        <ul>
          <li>
            <strong>Challenge:</strong> Build a Content Management System (CMS) using PHP, HTML, CSS, and JavaScript.
          </li>
          <li>
            <strong>Actions:</strong> Created a website using Create, Read, Update, and Delete (CRUD) using MyPHP Admin; implemented validation rules by sanitizing and validating all retrieved IDs from GET or POST parameters used in SQL queries; added image Uploads and Image Processing by way of form upload with automatic resizing.
          </li>
          <li>
            <strong>Result:</strong> Created a food blogging site that received the highest grade from the instructor.
          </li>
        </ul>
      </div>
      <div className="profile-section">
        <h3>Website Development & Deployment, Red River College Polytechnic, Winnipeg, Manitoba</h3>
        <p>December 2022</p>
        <ul>
          <li>
            <strong>Challenge:</strong> Create and deploy a website using HTML5, CSS, and JavaScript.
          </li>
          <li>
            <strong>Actions:</strong> Created a webpage containing three HTML5 validated pages; included products and services, contact page, and pharmaceutical content; uploaded the site to the World Wide Web.
          </li>
          <li>
            <strong>Result:</strong> The website was evaluated and graded by the instructor, and the feedback was 'excellent.'
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BasicInfo;
