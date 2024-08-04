import React from 'react'
import ProjectCard from '../../components/project-card/project-card'
import house from '../../assets/images/project-photos/house.jpg';
import recipe from '../../assets/images/project-photos/recipe.jpg';
import booking from '../../assets/images/project-photos/booking.jpg';
import './styles.css';
function Projects() {
  return (
    <div className='projects-container'>
      <div className='project-header'>Projects</div>
      <div className='project-description'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects</div>
      <div className='project-sections'>
      <ProjectCard image={house} title="Rent Management App" content="This Flutter-based mobile application streamlines the rental process by allowing users to browse available properties for rent, contact property managers directly, and post their own rental listings."  
      gitlink="https://github.com/Balamurugank10"
       applink="https://drive.google.com/file/d/1RpSDxSMOXD2aDz7CsGr6nRD_i8Rr6iCw/view?usp=drivesdk"/>  
      <ProjectCard image={booking} title="Ticket Booking Website" content="This MERN stack application enables admins to add movies and users to easily book tickets. Its intuitive interface streamlines the movie booking process for a seamless experience." /> 
      <ProjectCard image={recipe} title="Recipe App" content="This Flutter-based application allows users to explore various recipes with ingredients and cooking steps, providing an easy way to prepare delicious meals at home quickly." gitlink="https://github.com/Balamurugank10"
       applink="https://drive.google.com/file/d/1RpSDxSMOXD2aDz7CsGr6nRD_i8Rr6iCw/view?usp=drivesdk"/> 
      </div>
       
    </div>
  )
}

export default Projects
