import './App.css';
import Intro from './components/1Intro/Intro';
import Skill from './components/3Skill/Skill';
import Contact from './components/Contact/contact';
import AboutMe from './components/2About/aboutMe';
import Services from './components/4Services/Services';


function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Skill />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
