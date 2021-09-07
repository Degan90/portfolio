import { Link } from "react-router-dom";

import linkedin from "../img/linkedin.png"
import email from "../img/email.png"
import phone from "../img/phone.png"
import github from "../img/github.png"
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import pourya from "../img/pourya.jpg"
import pourya1 from "../img/pourya1.jpg"
import orange from "../img/orange.jpg"
const Home = () => {
    return (<div>
        <div className="home">
            <div className="title">
                <div>
                    <h1 className="name">Pourya Dehghan</h1>
                    <h2>I am a software Engineer</h2>
                    <p>I am based in Atlanta</p>
                </div>
                <div className="information">

                    {/* <Link to="/contact" >
                        <h4>Contact</h4>
                    </Link>
                    <Link to="/project" >
                        <h4>Project</h4>
                    </Link>
                    <Link to="/about">
                        <h4>About</h4>
                    </Link> */}
                    <div>
                        
                        <a href="mailto: poorya.degan@gmail.com"><img className="icon" src={email} /></a>
                    </div>


                    <div>
                        
                        <a href="https://www.linkedin.com/in/degan90"><img className="icon" src={linkedin} /></a>
                    </div>

                    <div className="phone">
                        
                        <a href="tel:4043845765"><img className="icon" src={phone} /></a>
                    </div>
                    <div>
                        
                        <a href="https://github.com/Degan90"><img className="icon" src={github} /></a>
                    </div>

                </div>

            </div>

            <div>
                <img className="firstImage" src={pourya1} />
            </div>
        </div>
            
        
        </div>


    )
}

export default Home;