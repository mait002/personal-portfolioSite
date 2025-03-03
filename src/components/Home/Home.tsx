import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import GreetBot from '../../assets/images/Animation - 1740687549796.json'
import scrollDirection from '../../assets/images/ScrollDown.json'
import './Home.scss'
import App from '../../App';

const Home = () => {
    return (
        <>
        
        <div className='greeter'>

            <div className='bot'>
                <Lottie animationData={GreetBot} loop={true} />
            </div>
            <h4 className='tektur-greeting'>
                <Typewriter
                    words={[
                        "I'm Maitrobot. Since Maitreyee herself couldn't be here, I am here to tell you all about her!"
                    ]}
                    loop={1}
                    typeSpeed={100}
                    
                    
                    
                />
            </h4>
            
            <Lottie className='scrollDown' animationData={scrollDirection} loop={true}/>
            
        </div>
        
        </>
    )
}

export default Home;