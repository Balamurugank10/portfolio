import React from 'react'
import './education-card.css';
function EducationCard({schoolName,standard,startingYear,endingYear,grade}) {
  return (
    <div className='education-card'>
      <div className='school-name'>{schoolName}</div>
      <div className='class'>{standard}</div>
      <div className='year'>{startingYear}-{endingYear}</div>
      <div className='grade'>GRADE: {grade}</div>
    </div>
  )
}

export default EducationCard
