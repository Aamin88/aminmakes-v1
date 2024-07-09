// styles
import "./assets/styles/App.css";

// components
import Header from "./components/header/header";
import ExperienceSection from "./utils/experienceSection";
import Experience from "./components/experienceCard/experienceCard";
import ProjectSection from "./utils/projectSection";
import ProjectCard from "./components/projects/projectCard";
import Footer from "./components/footer/footer";

// image
import renewed from "./assets/images/renewed.png";
import hulu from "./assets/images/image1 3.png";

const experiences = (
  <>
    <Experience
      title={"Affordable Renewable Energy LTD"}
      subtitle={"Designer and Developer"}
      duration={"Jan. 2023 - ongoing"}
      type={"Frerlance"}
      link={"https://renewed-solar.vercel.app/"}
    />
    <Experience
      title={"Bootcamp HyperionDev"}
      subtitle={"Intensive three month of coding"}
      duration={"Dec. 2022 - Mar. 2023"}
      type={"Full-time"}
      link={"https://www.hyperiondev.com/portfolio/113792/"}
    />
  </>
);

const projects = (
  <>
    <ProjectCard
      title={"Affordable Renewable Energy"}
      subtitle={
        "A freelance project to design and built a react website for a newly formed solar installation company"
      }
      url={renewed}
      link={"https://renewed-solar.vercel.app/"}
    />

    <ProjectCard
      title={"Booktrackr"}
      subtitle={
        "A personal project a community of readers to add books they have read and what they think about the book."
      }
      url={hulu}
      link={"https://booktrackr.vercel.app/"}
    />
  </>
);

function App() {
  return (
    <div className="App">
      <Header />
      <ExperienceSection title={"Experience"} content={experiences} />
      <ProjectSection
        title={"Projects"}
        subtitle={"This sections entails some of the projects I have completed"}
        content={projects}
      />
      <Footer />
    </div>
  );
}

export default App;
