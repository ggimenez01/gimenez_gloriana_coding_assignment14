import React from 'react';
import './Work.css'; // Import the CSS file for additional styling

function Work() {
  return (
    <div className="work-container">
      <h1>Work</h1>
      <div className="work-experience">
        <h3 className="work-title">Title: Food Blogging Site</h3>
        <p className="work-description">
          Description: Build a Content Management System (CMS) using PHP, HTML, CSS, and JavaScript. Created a website using Create, Read, Update, and Delete (CRUD) using MyPHP Admin; implemented validation rules by sanitizing and validating all retrieved IDs from GET or POST parameters used in SQL queries; added image Uploads and Image Processing by way of form upload with automatic resizing.
        </p>
        <img src={process.env.PUBLIC_URL + '/foodyref.png'} alt="Food Blogging Site" className="work-image" />
        <p className="work-link">
          Link: <a href="https://github.com/ggimenez01/recipes_website.git">https://github.com/ggimenez01/recipes_website.git</a>
        </p>
        <p className="work-tech-list">
          Tech List: PHP, HTML, CSS, JavaScript
        </p>
      </div>
      <div className="work-experience">
        <h3 className="work-title">Title: Website Development</h3>
        <p className="work-description">
          Description: To build a website for a small pharmacy store that contains products, contact page, about us, and pharmaceutical contents.
        </p>
        <img src={process.env.PUBLIC_URL + '/psalms.png'} alt="Website Development" className="work-image" />
        <p className="work-link">
          Link: (link not available because the free site hosting terminated)
        </p>
        <p className="work-tech-list">
          Tech List:  HTML, CSS, JavaScript
        </p>
      </div>
    </div>
  );
}

export default Work;
