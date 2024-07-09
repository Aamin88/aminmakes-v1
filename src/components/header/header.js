// styles
import "../../assets/styles/header.css";

// components
import Banner from "../../shared/banner";
import Badge from "../../shared/bagde";
import Navbar from "../nav/nav";
import Links from "../../shared/lnks";
import Email from "../../shared/email";
import Address from "../../shared/address";
import Columns from "../../shared/column";

// images
import bootstrap from "../../assets/images/bootstrap.svg";
import mongoose from "../../assets/images/mongoose-1.svg";
import react from "../../assets/images/react-js-icon.png";
import node from "../../assets/images/nodejs-logo-svgrepo-com.svg";
import js from "../../assets/images/js.svg";

// icons
import {
  BsArrow90DegRight,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { MdOutlineMarkEmailRead, MdLocationPin } from "react-icons/md";

// skills stacks
const stack = ["react js", "express js", "mongoDB", "node js"];
const techStack = stack.map((skill) => (
  <Badge text={skill} skill={skill.split(" ")[0]} />
));

// social
const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amin-alhassan-042150161/",
    icon: BsLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/Aamin887",
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

// contact information
const address = {
  email: "Forkahamin@yahoo.co.uk",
  address: {
    postcode: "cm77",
    county: "Essex",
  },
};

const contactContent = (
  <>
    <Email
      icon={<MdOutlineMarkEmailRead className="mail" />}
      email={address.email}
    />
    <Address
      icon={<MdLocationPin className="pointer" />}
      postcode={`${address.address.county} ${address.address.postcode}`}
    />
  </>
);

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <Navbar />

        <div className="main">
          <div className="left-text">
            <div className="intro">
              <h4 className="title">Hi¡ I am</h4>
              <h2 className="title">Amin Alhassan</h2>

              <p>
                A fullstack developer with nearly two years of experience in the
                freelance and personal learning.
              </p>
            </div>

            <Columns title={"Technology Stack"} content={techStack} />

            <Columns title={"Socials"} content={socialStack} />

            <Columns title={"Contact"} content={contactContent} />
          </div>

          <div className="right-image">
            <Banner name={bootstrap} bannerClass={"bootstrap"} />
            <Banner name={mongoose} bannerClass={"mongoose"} />
            <Banner name={react} bannerClass={"react"} />
            <Banner name={node} bannerClass={"node"} />
            <Banner name={js} bannerClass={"js"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
