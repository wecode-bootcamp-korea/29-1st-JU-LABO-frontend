import React, { useState } from 'react';
import './AboutUs.scss';
import AboutUsContent from './AboutUsContent';
import AboutUsMember from './AboutUsMember';

const AboutUs = () => {
  const [isHamster, setIsHamster] = useState(true);
  const [positionHamster, setPositionHamster] = useState({
    top: '200px',
    left: '50px',
  });

  const [isHamster2, setIsHamster2] = useState(true);
  const [positionHamster2, setPositionHamster2] = useState({
    top: '300px',
    left: '500px',
  });

  const [selectedName, setSelectedName] = useState('empty');

  const handleHamsterClose = () => {
    setIsHamster(false);

    setTimeout(() => {
      setPositionHamster({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}vh`,
      });
      setIsHamster(true);
    }, 1800);
  };

  const handleHamsterClose2 = () => {
    setIsHamster2(false);

    setTimeout(() => {
      setPositionHamster2({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}vh`,
      });
      setIsHamster2(true);
    }, 3800);
  };

  const handleNameClick = e => {
    const name = e.target.getAttribute('name');
    setSelectedName(name);
  };

  const MEMBERS = [
    'namju',
    'jeongdo',
    'chungkyu',
    'hyungtaek',
    'jiyeon',
    'changhyun',
  ];

  return (
    <div className="aboutUs">
      <main className="main">
        <header>
          <img
            alt="julabo logo"
            className="julaboImg"
            src="/images/julabo-aboutus2.gif"
          />
          <p>
            Hi, we are team JULABO!!! <br />
            We Worked really hard to provide you a nice website but I don't know
            if it worked!
          </p>
        </header>
        <nav className="navMembers">
          <ul className="memberList">
            {MEMBERS.map((item, index) => (
              <AboutUsMember
                name={item}
                key={index}
                selectedName={selectedName}
                handleNameClick={handleNameClick}
              />
            ))}
          </ul>
        </nav>
        <section className="memberStoryWrap">
          <div
            className={
              selectedName === 'empty' ? 'emptyStory active' : 'emptyStory'
            }
          >
            <p className="emptyStoryP">Select a name above!</p>
          </div>

          {MEMBERS.map((item, index) => (
            <AboutUsContent
              name={item.toLowerCase()}
              key={index}
              selectedName={selectedName}
            />
          ))}
        </section>
        <footer>©JULABO, 2022</footer>
      </main>
      <div
        className={isHamster ? 'hamsterAttack active' : 'hamsterAttack'}
        style={positionHamster}
      >
        <button
          type="button"
          className="hamsterClose"
          onClick={handleHamsterClose}
        >
          close
        </button>
        <img
          alt="hamster1"
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        />
      </div>

      <div
        className={isHamster2 ? 'hamsterAttack active' : 'hamsterAttack'}
        style={positionHamster2}
      >
        <button
          type="button"
          className="hamsterClose"
          onClick={handleHamsterClose2}
        >
          close
        </button>
        <img
          alt="hamster2"
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
      </div>
    </div>
  );
};

export default AboutUs;
