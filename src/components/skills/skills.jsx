import React from 'react'
import SkillsCard from '../skills-card/skills-card'
import './skills.css'
function Card() {
   const programming_languages=["Java","React","HTML","CSS","JavaScript","NodeJS","Express","C"]
   const others=["Flutter","Git","GitHub","Oracle","PostgreSQL"]
   const skillIconsForProgrammingLanguages = ['fab fa-java', 'fab fa-react','fab fa-html5', 'fab fa-css3-alt','fab fa-js','fab fa-node-js' , 'fab fa-node-js','fas fa-code'];
   const skillIconsForOthers=[
    'fab fa-flutter', // Use Flutter icon for Flutter
    'fab fa-git', // Use Git icon for Git
    'fab fa-github',
    'fas fa-database',
    'fas fa-database'

   ]
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
    
      <div className="skills-component">
        <h1>SKILLS</h1>
        <h3>Here are some of my skills on which i have learnt</h3>
        <div className='skills-card-in'>
            
                <SkillsCard skills={programming_languages} icons={skillIconsForProgrammingLanguages} iconColor={skillColors} title="Programming Languages"/>
                <SkillsCard skills={others}icons={skillIconsForOthers} iconColor={skillColors}title="Others"/>
          
             
        </div>
      </div>
    
  )
}

export default Card
