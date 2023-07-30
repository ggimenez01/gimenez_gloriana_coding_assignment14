import React from 'react';
import './Education.css'; // Import the CSS file for additional styling (create the Education.css file in the same directory as this component)

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>

      <div className="education-item">
        <h3>FULL STACK WEB DEVELOPMENT, RED RIVER COLLEGE POLYTECHNIC, WINNIPEG, MANITOBA</h3>
        <p className="education-date">AUGUST 2022 – PRESENT</p>
        <ul>
          <li>
            Utilize diverse range of programming languages such as HTML, CSS, JavaScript, PHP to design, create, and modify dynamic websites; crafted code from scratch to develop food blogging and pharmaceutical websites that meet project requirements.
          </li>
          <li>
            Developed plan to build a Content Management System (CMS) based on customer (instructor) requirements using PHP and various web development technologies; analyzed needs and implemented relevant content, graphics, and performance to satisfy customer’s needs.
          </li>
          <li>
            Completed instructor’s ‘Design to Development’ task; created visually appealing website mock-up, delivered as PNG file; utilized HTML5 and corresponding CSS file to accurately simulate design and functionality depicted in mock-up.
          </li>
          <li>
            Used axe DevTools to run accessibility checks on project mockup testing related code and web application interface.
          </li>
          <li>
            Conducted analysis, research planning, and CRAAP Resource Evaluation with classmates on group Product Recommended System (PRS) project; explained conclusions and recommended solutions to enhance existing system.
          </li>
          <li>
            Conducting in-depth research and evaluation of interactive media software of text editors like Sublime and Visual Studio Code to ensure application remains up to date and features performing at optimal levels.
          </li>
        </ul>
      </div>

      <div className="education-item">
        <h3>BSc. COMPUTER SCIENCE AND INFORMATION SYSTEMS, CENTRO ESCOLAR UNIVERSITY, BULACAN, PHILIPPINES</h3>
        <p className="education-date">MARCH 2006</p>
      </div>
    </div>
  );
}

export default Education;
