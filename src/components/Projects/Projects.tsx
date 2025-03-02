import Lottie from 'lottie-react'
import uber from '../../assets/images/uber.json'
import ball from '../../assets/images/ball.json'
import profile from '../../assets/images/profile.png'
import bank from '../../assets/images/bank.json';
import dice from '../../assets/images/dice.json'
import './Projects.scss'

const Projects = () => {

  return (
    <>
      <div className='projectContainer'>
        <h3>Projects</h3>
          <div className="row projectSlider">
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/TMUber-Application">
            <Lottie className='img rounded-circle' animationData={uber} loop={true}/>
            <h5>TMUber App</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Sky-Hopper-Game">
            <Lottie className='img' animationData={ball} loop={true}/>
            <h5>Sky Hopper Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
                
                <a href="/">
                <img className='img' src={profile} alt="cartoon maitreyee" />
                    <h5>Personal Website</h5>
                    
                </a>
            </div>
            <div className="col-lg-3 project">
                
                <a href="https://github.com/mait002/Retail-Banking-DBMS">
                <Lottie className='img' animationData={bank} loop={true}/>
                <h5>Retail Banking Database</h5>
                </a>
            </div>
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Dice-Game">
            <Lottie className='img rounded-circle' animationData={dice} loop={true}/>
            <h5>Dice Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/TMUber-Application">
            <Lottie className='img rounded-circle' animationData={uber} loop={true}/>
            <h5>TMUber App</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Sky-Hopper-Game">
            <Lottie className='img' animationData={ball} loop={true}/>
            <h5>Sky Hopper Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
                
                <a href="/">
                <img className='img' src={profile} alt="cartoon maitreyee" />
                    <h5>Personal Website</h5>
                    
                </a>
            </div>
          </div>
      </div>
    </>
  );
};

export default Projects;
