import React from 'react';
import './BasicInfo.css'; // Import the CSS file for additional styling

function BasicInfo() {
  return (
    <div className="basic-info-container">
      <div className="profile-section">
        <img
          src={process.env.PUBLIC_URL + '/woman.jpg'}
          alt="woman"
          className="profile-picture"
        />
        <div className="profile-details">
          <h1>GLORIANA FELICIANO GIMENEZ</h1>
          <p className="contact-info">
            Winnipeg, Manitoba · (204) 229-4517 · gloriana0115@gmail.com
          </p>
          <p className="profile-links">
            <a href="https://www.linkedin.com/in/glorianagimenez/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
            &nbsp;·&nbsp;
            <a href="https://github.com/ggimenez01/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="profile-summary">
        <h2>PROFILE</h2>
        <ul>
          <li>
            Dedicated and enthusiastic Full Stack Web Development student in the final year of a 2-year program, developing skills and expertise in designing, implementing, maintaining, and optimizing websites and web plugins.
          </li>
          <li>
            Brainstormed new features to enhance user experiences and productivity by breaking down complex problems into manageable tasks and components.
          </li>
          <li>
            Ensured project completion through testing and debugging of code; applied the latest web development technologies and methodologies to improve skills and knowledge.
          </li>
          <li>
            Applied knowledge of HTML, CSS, SQL, PHP, JavaScript, and JavaScript libraries (JSON, AJAX) to design and develop a dynamic food blogging website allowing users to post, edit, and delete comments on recipes; implemented additional functionality to browse a comprehensive list of restaurant and grocery stores for ingredient purchases.
          </li>
          <li>
            Collaborated with diverse team members on different group assignments, e.g., User Input Validation (PHP), Blogging Site, and AJAX search form for JSON dataset queries.
          </li>
          <li>
            Prioritized tasks and managed time by completing assignments and projects before due dates, resulting in organized workflows and consistent high-quality work.
          </li>
          <li>
            Implemented basic Git version control concepts on personal and academic projects, including food blogging websites, to store and back up code; used Git commands and tools to track changes, revert to previous versions, and manage project history.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BasicInfo;
