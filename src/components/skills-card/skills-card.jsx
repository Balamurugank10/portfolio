import React from 'react'
import './skills-card.css';
function SkillsCard({skills,icons,iconColor,title}) {

    //const skills=["java","C","Python"]
  return (
    <div className='skills-card'>
        <h4>{title}</h4>
      <ul>
                    {skills.map((skills,index)=>(
                        <li key={index} className='skill-item'>
                            <i className={icons[index]} aria-hidden="true" style={{ marginRight: '10px' ,color:iconColor[skills]}}></i>
                            {skills}</li>
                    ))}
                </ul>
    </div>
  )
}

export default SkillsCard
