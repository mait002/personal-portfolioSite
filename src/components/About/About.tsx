import { useState, useEffect } from "react";
import ProfilePicture from "../../assets/images/Ellipse 1.png";
import TMU from "../../assets/images/tmu1.png";
import "./About.scss";

const About = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Meet Maitreyee");
  const [isOpenNav, setOpenNav] = useState(false);
  const [, setItemSelected] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);
  

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
      if (window.innerWidth > 800){
        setOpenNav(true);
        
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (name : string) => {
    setSelectedItem(name);
    setItemSelected(true);
    setOpenNav(false);
  }

  return (
    <>
      <div className="about">
        <div className="about-nav">
        <div className="caret-icon" onClick={() => setOpenNav(!isOpenNav)}>
          <p>{selectedItem}</p>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
              
                        >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
            </div>
          <ul className={`aboutnav nav-underline ${isOpenNav || !isSmallScreen ? "expand": "collapse"}` }>
            <li className={`nav-item ${isSmallScreen && selectedItem === "Meet Maitreyee" ? "hidden" : ""}`}>
              <a
                className={
                  selectedItem === "Meet Maitreyee" ? `nav-link active` : "nav-link"
                }
                onClick={() => handleClick("Meet Maitreyee")
                  
                }
                href="#about"
              >
                Meet Maitreyee
              </a>
            </li>
            <li className={`nav-item ${isSmallScreen && selectedItem === "Education" ? "hidden" : ""}`}>
              <a
                className={
                  selectedItem === "Education" ? `nav-link active` : "nav-link"
                }
                onClick={() => handleClick("Education")}
                href="#about"
              >
                Education
              </a>
            </li>
            <li className={`nav-item ${isSmallScreen && selectedItem === "a little more..." ? "hidden" : ""}`}>
              <a
                className={
                  selectedItem === "a little more..." ? `nav-link active` : "nav-link"
                }
                onClick={() => handleClick("a little more...")}
                href="#about"
              >
                a little more...
              </a>
            </li>
            
          </ul>
          
        </div>
        {selectedItem === "Meet Maitreyee" && (
          <section id="meet">
            <img className="propic" src={ProfilePicture} />
            <div className="intro">
              <p>
                Maitreyee is a third-year Computer Science student at Toronto
                Metropolitan University, driven by a relentless curiosity for
                technology. When she first embarked on her CS journey, she was
                captivated by the art of building, designing, and managing web
                applications.
                <br />
                <br />
                Determined to sharpen her skills, she took a self-driven
                approach—learning through YouTube tutorials, online resources,
                and hands-on projects. She has developed a solid grasp of
                full-stack development—seamlessly transitioning between crafting
                intuitive UI/UX and handling complex backend operations.
                <br />
                From designing responsive interfaces to managing client-server
                requests and API integrations, Maitreyee thrives in building
                scalable, user-friendly applications.
              </p>
            </div>
          </section>
        )}

        <div className="aboutInfo">
          {selectedItem === "Education" && (
            <section id="education">
              <div className="twoColEntry">
                <div className="tmu">
                  <a target="_blank" href="https://www.torontomu.ca/">
                    <img src={TMU} alt="tmu logo" />
                  </a>
                  <h4>
                    Toronto Metropolitan University (Formerly Ryerson
                    University)
                  </h4>
                </div>

                <h4 className="location">Toronto, Canada</h4>
              </div>
              <div className="twoColEntry">
                <p>Bachelor of Science (B.S.) Computer Science: 4.2/4.33 GPA</p>
                <p>Class of 2027</p>
              </div>

              <p>
                <strong>Relevant Courses:</strong>
                <ul>
                  Software Engineering, Discrete Structures, Operating Systems,
                  Comparative Programming Languages, Unix and C/C++ systems,
                  Data Structures, Python, Java, Machine Learning, Database
                  Management Systems
                </ul>
              </p>
              <p>
                <strong>Activities:</strong>
                <ul>
                  Undergraduate Science Society of Toronto Metropolitan (USSTM):
                  Formal Committee Member
                </ul>
              </p>
            </section>
          )}

          {selectedItem === "a little more..." && (
            <section id="more">
              <p>
                Lately, her passion has expanded into the fascinating world of{" "}
                <strong>Artificial Intelligence and Machine Learning</strong>.
                <br />
                After taking the Machine Learning course at TMU, she has built a
                strong foundation in data handling, preprocessing, and
                transformation techniques—turning messy datasets into valuable
                insights. Whether it's training predictive models, fine-tuning
                algorithms, or optimizing datasets for accuracy, she enjoys the
                challenge of bridging data with intelligent systems. With an
                ever-evolving skill set and a drive for continuous learning,
                Maitreyee is always looking for new challenges.
              </p>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default About;