//import React from "react";

import React from 'react'
import Card from '../../components/skills/skills'
import './styles.css';
import Education from '../../components/education/education';
import Certifications from '../../components/certifications/certifications';
function About() {
  return (
    <div classname="about-page">
     
     <Card />
     <Education />
     <Certifications />
    </div>
  )
}

export default About
