import heroes from "../img/heroes.jpg";
import dotaSimon from "../img/dotaSimon.png";
import project3 from "../img/project3.png";
import { useState } from "react";
import greengh from "../img/greengh.png";
import denj from "../img/denj.png";
const Project = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className="projectTitle">The Applications I've built</h1>

      <section className="allProject">
        <div className="project">
          <div>
            <h2>Denj</h2>
            <div className="projectDes">
              <h5>
                This is a full stack mobile application that I created with
                React Native. This application is about cozy places that users
                have been and they want to share with other people.
              </h5>
              <div>
                <a href="https://github.com/Degan90/Denj-client.git">
                  <img className="icon" src={greengh} />
                </a>
                <div>
                  <a target="_blank">
                    <img className="denj" src={denj} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Agora</h2>
            <div className="projectDes">
              <h5>
                This is the full stack appliacation that we created as a group.
                This is an online application for discussions on a forum based on
                topics and descriptions. Each forum has their own and is
                fully functional.
              </h5>
              <div>
                <a href="https://github.com/SEIR-Angelica-Project-3/Agora-client.git">
                  <img className="icon" src={greengh} />
                </a>
              </div>
            </div>
            <div>
              <a href="https://agoraforum.netlify.app/" target="_blank">
                <img className="projectImage" src={project3} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="projectDes">
            <h2>Dota2 Heroes</h2>

            <h5>
              My App is called Dota2 Heroes. It's an app that shows the all
              Dota2 Heroes and if you click on hero it gives you the detail and
              attributes of that hero.
            </h5>
            <div>
            <a href="https://github.com/Degan90/Dota2-Heroes.git">
              <img className="icon" src={greengh} />
            </a>
            </div>
          </div>
            <div>
              <a
                href="https://pedantic-edison-4080c1.netlify.app"
                target="_blank"
              >
                <img className="projectImage" src={heroes} />
              </a>
            </div>
        </div>
        <div className="project">
          <div className="projectDes">
            <h2>Dota2_Simon</h2>

            <h5>
              This is a Simon game which players must repeat random sequences of
              by clicking the buttons in correct order. The differences
              between this game and the other Simon games are that I used the Dota 2
              character's images and sounds to make it more interesting.
            </h5>
            <div>
              <a href="https://github.com/Degan90/Simon-Dota.git">
                <img className="icon" src={greengh} />
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://hungry-meninsky-f0a920.netlify.app/"
              target="_blank"
            >
              <img className="projectImage" src={dotaSimon} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
