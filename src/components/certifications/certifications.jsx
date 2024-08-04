import React from 'react'
import './certifications.css';
import CertificationsCard from '../certifications-card/certifications-card';
function Certifications() {

   

    const skillIcons={
        JavaScript: 'fab fa-js', // Yellow for JavaScript
        React: 'fab fa-react', // Light blue for React
        CSS: 'fab fa-css3-alt', // Blue for CSS
        NodeJS: 'fab fa-node-js', // Green for Node.js
        Python: 'fab fa-python', // Blue for Python
              
        HTML:'fab fa-html5',
        GitHub:'fab fa-github',
        PostgreSQL:'fas fa-database',
        Oracle: 'fas fa-database',
        Flutter:'fab fa-flutter',
        Git:'fab fa-git',
        Dart:'fas fa-code',
        Express: 'fab fa-node-js',
        C:'fas fa-code'
    }

    const skillColors = {
        JavaScript: '#F7DF1E', // Yellow for JavaScript
        React: '#61DAFB', // Light blue for React
        CSS: '#264DE4', // Blue for CSS
        NodeJS: '#8CC84B', // Green for Node.js
        Python: '#3776AB', // Blue for Python
        NodeJs: '#8CC84B',
        HTML:'#E44D26',
        GitHub:'#181717',
        PostgreSQL:'#336791',
        Oracle: '#F80000',
        Flutter:'#02569B',
        Git:'#F05032',
        Dart:'#00B3E3',
        Express: '#5C5C5C',
        C:'#00599C'
      };

  return (
    <div className="certifications">
      <h1>Certifications</h1>
      <CertificationsCard certificateTitle="Introduction to programming in C" certificateFoundation="NPTEL" certificateSkills={["C"] } certificateLink="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS02S45360009130051871"
      skillIcons={skillIcons} skillColors={
        skillColors
      } />
      <CertificationsCard certificateTitle="Flutter & Dart - The Complete Guide" certificateFoundation="Udemy" certificateSkills={["Flutter","Dart"] } certificateLink="https://www.udemy.com/certificate/UC-c0c75602-cce0-48f7-b070-93b7e5364e27/"
      skillIcons={skillIcons} skillColors={
        skillColors
      } />
       <CertificationsCard certificateTitle="Responsive Web Design" certificateFoundation="FreeCodeCamp" certificateSkills={["HTML","CSS"] } certificateLink="https://freecodecamp.org/certification/fcc53c1daab-9285-48bb-a78c-1752702e460/responsive-web-design"
      skillIcons={skillIcons} skillColors={
        skillColors
      } />

    </div>
  )
}

export default Certifications
