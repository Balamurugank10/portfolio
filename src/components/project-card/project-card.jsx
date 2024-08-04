import React from 'react'
import './project-card.css';
function ProjectCard({image,title,content,gitlink,applink}) {
  return (
    <div className='project-card'>     
      
        <img src={image} alt="img Not supported" />

      
      <div className='project-section'>
        <h3>{title}</h3>
        
            <p>{content}</p>
            
            
        <div class="links">
        <a class="btn git-link" href={gitlink} target="_blank" rel="noopener noreferrer">
              <i className='fab fa-github' style={{ fontSize: '30px', color: 'white' }}></i>
              <p>View Code</p>
            </a>
            <a class="btn app-link" href={applink} target="_blank" rel="noopener noreferrer">
              <i className='fa-solid fa-eye' style={{ fontSize: '30px', color: 'white' }}></i>
              <p>Demo</p>
            </a>
        </div>
        
            
        
      </div>
    </div>
  )
}

export default ProjectCard
