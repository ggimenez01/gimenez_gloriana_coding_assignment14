import React from 'react';
import './SupportingResources.css'; // Import the CSS file for additional styling

function SupportingResources() {
  return (
    <div className="supporting-resources-container">
      <h2>Supporting Resources: </h2>
    
      {/* Article/Tutorial */}
      <div>
        <h4>Introduction to HTML5</h4>
        <img
          src={process.env.PUBLIC_URL + '/html5.png'}
          alt="html5 logo"
          style={{ width: '100px', height: '100px' }} // Set the desired width and height
        />
        <p>
          Learn the basics of HTML5 and its new features. Check out the article at{' '} 
          <a href="https://blog.hubspot.com/blog/tabid/6307/bid/5847/a-marketer-s-guide-to-html5.aspx">HubSpot</a>. HTML5 is the newest version of HTML. The term refers to two things. One is the updated HTML language itself, which has new elements and attributes. The second is the larger set of technologies that work with this new version of HTML — like a new video format — and enable you to build more complex and powerful websites and apps.
To understand how HTML has evolved over the years, lets look at the differences between HTML and HTML5.
        </p>
      </div>

      {/* Tool */}
      <div>
        <h4>Visual Studio Code</h4>
        <img
          src={process.env.PUBLIC_URL + '/vscode.png'}
          alt="vscode logo"
          style={{ width: '150px', height: '150px' }} // Set the desired width and height
        />
        <p>
          A powerful code editor with great extensions for web development. Get it at{' '}
          <a href="https://code.visualstudio.com/">code.visualstudio.com</a>.Is VS Code an IDE?
Visual Studio is an integrated development environment (IDE) and Visual Studio Code is a rich text editor like Sublime Text and Atom. But the difference between the tools is more than just IDE and text editor. An IDE is a robust tool for writing, editing, debugging, and running your code.
        </p>
      </div>

      {/* Library */}
      <div>
        <h4>React.js Official Documentation</h4>
        <img
          src={process.env.PUBLIC_URL + '/react.jpg'}
          alt="react logo"
          style={{ width: '120px', height: '120px' }} // Set the desired width and height
        />
        <p>
          Explore the official documentation of the React.js library at{' '}. 
          <a href="https://reactjs.org/docs/getting-started.html">reactjs.org</a>. React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


        </p>
        <p></p>
      </div>

      {/* Inspirational Article */}
      <div>
        <h4>Learn CSS for Beginners</h4>
        <img
          src={process.env.PUBLIC_URL + '/css.png'}
          alt="css logo"
          style={{ width: '120px', height: '120px' }} // Set the desired width and height
        />
        <p>
          Discover lesser-known CSS tricks to enhance your designs. Read the article at{' '}
          <a href="https://www.w3schools.com/css/">w3schools</a>. CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).
        </p>
      </div>
    </div>
  );
}

export default SupportingResources;
