import { useState } from "react";
import './NavBar.scss';
const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  

  return (
    <>
    
      <nav id="navbar" className="navbar">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a
              className={selectedItem === "home" ? "nav-link active" : "nav-link"}
              onClick={() => setSelectedItem("home")}
              
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "about" ? "nav-link active" : "nav-link"
              }
              onClick={() => setSelectedItem("about")}
              href="#about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "projects" ? "nav-link active" : "nav-link"
              }
              onClick={() => setSelectedItem("projects")}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "contact" ? "nav-link active" : "nav-link"
              }
              onClick={() => setSelectedItem("contact")}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
