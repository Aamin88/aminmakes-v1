// styles
import "./App.css";

// routes

import Projects from "./routes/projects/Projects";

// components
import Header from "./routes/header/Header";
import ExperienceSection from "./utils/experienceSection";
import Experience from "./components/experienceCard/experienceCard";
import About from "./routes/about/About";
import Footer from "./components/footer/Footer";

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

function App() {
  return (
    <div className="App">
      <Header />
      <About />

      <ExperienceSection title={"Experience"} content={experiences} />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
