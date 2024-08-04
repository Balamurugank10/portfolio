import React, {useState, useEffect} from 'react'
import './styles.css';
import user1 from '../../assets/images/profile-image/user.jpg';
function Home() {

  const roles=['Full Stack Developer', 'Flutter Developer'];
  const [currentRole,setCurrentRole]=useState(0);
  const [isAnimating,setIsAnimating]=useState(true);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setIsAnimating(false);
      setTimeout(()=>{
        setCurrentRole((prev)=>(prev+1)%roles.length);
          setIsAnimating(true);
      },1000);
          },4000);

    return ()=>clearInterval(interval);
  },[]);

  return (
    <div className='home'>
     
      
      
      <div className='home-left'>
        <div>I am</div>
        <div className='name'>Balamurugan Kaliyaperumal</div>
        <div className='field'>
          Full Stack Developer
        </div>
        <div className='role-display'>
          
          
          <div><h3>I am a</h3></div>
          <div className={`role-text ${isAnimating ? 'slide-in' : 'slide-out'}`}>
           <h3> {roles[currentRole]} </h3>
          </div>
        </div>
        <div className='description'>
          dkdnfkjdjf kdjhfjkd jdkj <br/>jdjkdkjdhkj dn
        </div>
      </div>
      <div className='home-right'>
        <div className='user-image'>
          <img src={user1} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Home
