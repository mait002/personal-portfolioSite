
import { useState } from "react";
import "./NavBar.scss";


const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleScroll = (id: string) => {
    setSelectedItem(id);
    const section = document.getElementById(id);
    if (section){
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpenSideBar(false);
  };
    
  

  return (
    <>
      <div className={openSideBar == true ? "nav-bar-icon hide" : "nav-bar-icon"} >
        <h2 onClick={() => setOpenSideBar(true)}>☰</h2>
      </div>
      <nav id="navbar" className={openSideBar == true ? "show" : ""}>
        
        <ul className="nav nav-underline">
          <li className="close-icon">
          <svg
        
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-x"
          viewBox="0 0 16 16"
         onClick={() => setOpenSideBar(false)}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "home" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleScroll("home")}
              
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "about" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleScroll("about")}
              
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "projects" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleScroll("projects")}
              
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                selectedItem === "contact" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleScroll("contact")}
              
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
