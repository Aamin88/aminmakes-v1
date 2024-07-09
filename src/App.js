// styles
import './assets/styles/App.css'

// components
import Header from './components/header/header';
import ExperienceSection from './utils/experienceSection';
import Experience from './components/experienceCard/experienceCard';
import ProjectSection from './utils/projectSection';
import ProjectCard from './components/projects/projectCard';
import Footer from './components/footer/footer';


// image 
import todoApp from './assets/images/image1 2.png'
import hulu from './assets/images/image1 3.png'


const experiences = (
  <>
    <Experience title={'Bootcamp HyperionDev'} subtitle={'Intensive three month of coding'} duration={'Dec. 2022 - Mar. 2023'} type={'Full-time'} link={'https://www.hyperiondev.com/portfolio/113792/'}/>
    <Experience title={'Bootcamp HyperionDev'} subtitle={'Intensive three month of coding'} duration={'Dec. 2022 - Mar. 2023'} type={'Full-time'} link={'https://www.hyperiondev.com/portfolio/113792/'}/>
  </>
)

const projects = (
  <>
     <ProjectCard title={'Item Lister'} subtitle={'A todo app using html, css and js'} url={todoApp} link={'https://itemz.netlify.app/'}/>
      <ProjectCard title={'Hulu Clone'} subtitle={'Clone for the streaming site Hulu'} url={hulu} link={'https://myhuluap.netlify.app/'}/>
  </>
)

function App() {
  return (
    <div className="App">
      <Header />
      <ExperienceSection title={'Experience'} content ={experiences} />
      <ProjectSection title={'Projects'} subtitle={'This sections entails some of the projects I have completed'} content={projects}/>
      <Footer />
    </div>
  );
}

export default App;
