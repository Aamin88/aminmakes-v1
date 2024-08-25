import "./about.css";
import Hero from "../../assets/images/pic.png";
import Columns from "../../shared/column";
import Badge from "../../shared/bagde";
import Links from "../../shared/lnks";

import {
  BsArrow90DegRight,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

// skills stacks
const stack = ["react js", "express js", "mongoDB", "node js"];
const techStack = stack.map((skill) => (
  <Badge text={skill} skill={skill.split(" ")[0]} />
));

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aminalhassan01/",
    icon: BsLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/Aamin88",
    icon: BsTwitter,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AminForkah",
    Icon: BsGithub,
  },
];

const socialStack = socials.map(({ name, url }) => (
  <Links
    link={url}
    icon={
      name === "LinkedIn" ? (
        <BsLinkedin className="icon" />
      ) : name === "Github" ? (
        <BsGithub className="icon" />
      ) : (
        <BsTwitter className="icon" />
      )
    }
    name={name}
    arrow={<BsArrow90DegRight className="arrow" />}
  />
));

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h3 className="about-container-title">About me</h3>
        <div className="about-profile-img">
          <img src={Hero} alt="" />
        </div>
        <p className="about-container-subtitle">
          Hey! My name is Amin and I'm a self-taught developer with a passion
          for developing for the web. I'm currently seeking a full-time role
          that will allow me to channel my creativity through crafting beautiful
          software and engaging experiences.
        </p>
        <div className="tech-stack">
          <Columns title={"Technology Stack"} content={techStack} />
          <Columns title={"Socials"} content={socialStack} />
        </div>
      </div>
    </div>
  );
}

export default About;
