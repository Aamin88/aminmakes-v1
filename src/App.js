// styles
import "./App.css";

// routes

import Projects from "./routes/projects/Projects";
import About from "./routes/about/About";
import Experience from "./routes/experience/Experience";

// components
import Header from "./routes/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />

      <Experience />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
