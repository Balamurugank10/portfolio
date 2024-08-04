import React from 'react'
import './certifications-card.css';
function CertificationsCard({certificateTitle,certificateFoundation,certificateSkills,certificateLink,skillIcons,skillColors}) {
  return (
    <div className='certifications-card'>
        <div className='certificate-title'>{certificateTitle}</div>
        <div className='certificate-foundation'>Issuing organization: <b>{certificateFoundation}</b> </div>
        <div className='certificate-skills'><div>Skills Acquired: </div>
            <ul>
                {
                    certificateSkills.map((skills,index)=>(
                        <li key={index} className='skill-item'>
                            <i className={skillIcons[skills]} aria-hidden="true" style={{ marginRight: '10px' ,color:skillColors[skills]}}></i>
                         
                            {skills}
                        </li>
                    ))
                }
            </ul>
             </div>
        
        <div className='certificate-link'> <a href={certificateLink} target='_blank'  rel='noopener noreferrer'>view certificate</a> </div>
        

     
      
         </div>
  )
}

export default CertificationsCard
