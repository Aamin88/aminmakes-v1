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
      type={"Freelance"}
      link={"https://renewed-solar.vercel.app/"}
    />
    <Experience
      title={"Bootcamp HyperionDev"}
      subtitle={"Three month intensive coding bootcamp"}
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
        "This project was developed to foster reading among peers. It provides a form where other users can easily add books recommendations for other user to discover. The project also featured AI generate summary of any books added as well as the key takeway using GEMINI AI. "
      }
      url={booktrackr}
      gitLink={"https://github.com/Aamin88/booktrackr"}
      link={"https://bookstrackr.vercel.app/"}
    />

    <ProjectCard
      title={"Periodic"}
      subtitle={
        "This project was developed to help student and chemistry enthusiats who want to learn the chemical elemnts. The project features the pronunciation of each chemical element which can be heart by click on the element."
      }
      url={periodic}
      link={"https://periodic-table-murex-three.vercel.app/"}
      gitLink={"https://github.com/Aamin88/periodic-table"}
    />

    <ProjectCard
      title={"Lit ledger"}
      subtitle={
        "This project was developed to help me keep records of books on my reading list. Developed using html, css and javascript, leveraging the browser's localstorage to persist the record whilst allowing CRUD functionality."
      }
      url={litledger}
      link={"https://lit-ledger.vercel.app/"}
      gitLink={"https://github.com/Aamin88/lit-ledger"}
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
