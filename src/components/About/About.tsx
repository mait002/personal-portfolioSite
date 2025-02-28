import { useState } from "react";
import ProfilePicture from '../../assets/images/Ellipse 1.png';
import TMU from '../../assets/images/tmu1.png'
const About = () => {

    const [selectedItem, setSelectedItem] = useState<string | null>("meet");
    
  return (
    <>
      <div className="about">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className={selectedItem === "meet" ? "nav-link active" : "nav-link"}
              onClick={() => setSelectedItem("meet")} href="#meet">
              Meet Maitreyee
            </a>
          </li>
          <li className="nav-item">
            <a className={selectedItem === "education" ? "nav-link active" : "nav-link"}
              onClick={() => setSelectedItem("education")} href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className={selectedItem === "more" ? "nav-link active" : "nav-link"}
              onClick={() => setSelectedItem("more")} href="#more">
              a little more...
            </a>
          </li>
        </ul>
        {selectedItem === "meet" && 
            <section id="meet">
            <img className="propic" src={ProfilePicture}/>
            <p className="intro">
            Maitreyee is a third-year Computer Science student at Toronto Metropolitan University, driven by a relentless curiosity for technology. When she first embarked on her CS journey, she was captivated by the art of building, designing, and managing web applications. 
            <br />
            <br />
            Determined to sharpen her skills, she took a self-driven approach—learning through YouTube tutorials, online resources, and hands-on projects.
            She has developed a solid grasp of full-stack development—seamlessly transitioning between crafting intuitive UI/UX and handling complex backend operations. 
            <br />
            From designing responsive interfaces to managing client-server requests and API integrations, Maitreyee thrives in building scalable, user-friendly applications.
            </p>
        </section>
        }
        
        {selectedItem === "education" &&
        <section id="education">
            <div className="twoColEntry">
            <div className="tmu">
                <a target="_blank" href="https://www.torontomu.ca/"><img src={TMU} alt="tmu logo" /></a>
            <h4>Toronto Metropolitan University (Formerly Ryerson University)</h4>
            </div>
            
             <h4>Toronto, Canada</h4>
             
            </div>
            <div className="twoColEntry">
            <p>Bachelor of Science (B.S.) Computer Science: 4.2/4.33 GPA</p>
            <p>Class of 2027</p>
            </div>
            
            <p><strong>Relevant Courses:</strong> 
            <ul>
            Software Engineering, Discrete Structures, Operating Systems, Comparative Programming Languages, Unix and C/C++ systems,
            Data Structures, Python, Java, Machine Learning, Database Management Systems
            </ul>
            
            </p>
            <p><strong>Activities:</strong> 
            <ul>
            Undergraduate Science Society of Toronto Metropolitan (USSTM):
            Formal Committee Member
            </ul>
            
            </p>
        </section>
        }


        {selectedItem === "more" && <section id="more">
            <p>
            Lately, her passion has expanded into the fascinating world of <strong>Artificial Intelligence and Machine Learning</strong>.
            <br /> 
            After taking the Machine Learning course at TMU, she has built a strong foundation in data handling, preprocessing, and transformation techniques—turning messy datasets into valuable insights. 
            Whether it's training predictive models, fine-tuning algorithms, or optimizing datasets for accuracy, she enjoys the challenge of bridging data with intelligent systems.
            With an ever-evolving skill set and a drive for continuous learning, Maitreyee is always looking for new challenges.
            </p>
        </section>}
      </div>
    </>
  );
};

export default About;
