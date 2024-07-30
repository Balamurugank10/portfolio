import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Resume from './container/resume';
import Projects from './container/projects';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
