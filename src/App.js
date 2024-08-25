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
import booktrackr from "./assets/images/bookstrackr.jpeg";
import periodic from "./assets/images/periodic.jpeg";
import litledger from "./assets/images/litledger.jpeg";

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
      title={"Bookstrackr"}
      subtitle={
        "A freelance project to design and built a react website for a newly formed solar installation company"
      }
      url={booktrackr}
      link={"https://bookstrackr.vercel.app/"}
    />

    <ProjectCard
      title={"Periodic"}
      subtitle={
        "A freelance project to design and built a react website for a newly formed solar installation company"
      }
      url={periodic}
      link={"https://periodic-table-murex-three.vercel.app/"}
    />

    <ProjectCard
      title={"Lit ledger"}
      subtitle={
        "A personal project a community of readers to add books they have read and what they think about the book."
      }
      url={litledger}
      link={"https://lit-ledger.vercel.app/"}
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
