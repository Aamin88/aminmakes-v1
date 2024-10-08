import "./nav.css";
import Button from "../../shared/button";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* logo */}
        <div className="logo">
          Amin
          <span className="logo-badge"></span>
        </div>
        {/* navigation items */}
        <ul className="nav-links">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>

        {/* call to action button */}
        <div className="contact-button">
          <Button text={"Let's Chat"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
