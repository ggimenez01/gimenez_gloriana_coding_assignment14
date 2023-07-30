import React from 'react';
import './Work.css'; // Import the CSS file for additional styling

function Work() {
  return (
    <div className="work-container">
      <h2>Work Experience:</h2>
      <img src={process.env.PUBLIC_URL + '/trend.png'} alt="Trend Technologies Singapore Logo" />
      <h3>Company Name: TREND TECHNOLOGIES SINGAPORE PTE. LTD.</h3>
      <h3>Position: IT SPECIALIST</h3>
      <p>JANUARY 2019 – MAY 2022</p>
      <p>FEBRUARY 2013 – SEPTEMBER 2014</p>
      <ul>
        <li>
          Administered company network infrastructure, including active directory management, file server maintenance, firewall configuration, endpoint protection deployment, and email security protocols that minimize potential damage to organization’s systems and data and resulting in more stable uptime network.
        </li>
        <li>
          Provided expert configuration, installation, deployment, and support of systems, including users’ computing devices resulting in fewer support requests and smooth operations during the transition.
        </li>
        <li>
          Reviewed monthly end-point protection console reports, identifying, and mitigating reported vulnerabilities, and participated in regional cybersecurity strategies that proactively identified and addressed vulnerabilities before they could be exploited.
        </li>
        <li>
          Provided expert guidance to Asia’s Management Information Systems (MIS) teams, ensuring effective and efficient use of technology to support business operations and drive improvements in user support.
        </li>
        <li>
          Facilitated computing hardware and software purchases and liaised with vendors to ensure timely and cost-effective procurement of technology resources and ensure technology needs were met in alignment with goals and budget.
        </li>
        <li>
          Administered Office 365 Email Management using Azure; created, modified, and deleted user’s email addresses; managed rules for email protection to protect against malicious emails and other threats.
        </li>
        <li>
          Diagnosed, troubleshot, and resolved hardware and technical support issues, hardware malfunctions, software conflicts, and network connectivity problems to minimize work disruption and downtime.
        </li>
      </ul>
    </div>
  );
}

export default Work;
