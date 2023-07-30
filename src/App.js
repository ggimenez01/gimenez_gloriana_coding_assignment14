import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import DeveloperSetup from './components/DeveloperSetup';
import SupportingResources from './components/SupportingResources';
import Education from './components/Education';
import './App.css'; // Import the CSS file for additional styling

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Basic Info</Link>
            </li>
            <li className="navbar-item">
              <Link to="/education" className="navbar-link">Education</Link>
            </li>
            <li className="navbar-item">
              <Link to="/work" className="navbar-link">Work</Link>
            </li>
            <li className="navbar-item">
              <Link to="/skills" className="navbar-link">Skills</Link>
            </li>
            <li className="navbar-item">
              <Link to="/developer-setup" className="navbar-link">Developer Setup</Link>
            </li>
            <li className="navbar-item">
              <Link to="/supporting-resources" className="navbar-link">Supporting Resources</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<BasicInfo />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/developer-setup" element={<DeveloperSetup />} />
          <Route path="/supporting-resources" element={<SupportingResources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
