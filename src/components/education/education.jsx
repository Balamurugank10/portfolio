import React from 'react'
import EducationCard from '../education-card/education-card'

function Education() {
  return (
    <div className='education'>
      <h1>Education</h1>
      <h3>My education has been a journey of self-discovery and growth. My <br></br>educational details are as follows.</h3>
      <EducationCard schoolName="College of Engineering, Guindy" standard="MCA-Master of Computer Applications" startingYear='2023' endingYear='2025' grade='7.78% (Current)' />
      <EducationCard schoolName="St. Joseph's College of Arts & Science, Cuddalore" standard="BCA-Bachelor of Computer Applications" startingYear='2020' endingYear='2023' grade='8.04%' />
      <EducationCard schoolName="Lakshmi Chordia Matric Hr. Sec. School, Cuddalore" standard="HSC-XII" startingYear='2019' endingYear='2020' grade='79.8%' />
  
    </div>
  )
} 

export default Education
