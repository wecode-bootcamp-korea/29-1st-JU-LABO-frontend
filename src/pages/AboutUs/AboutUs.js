import React, { useState } from 'react';
import './AboutUs.scss';

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

  const [selectedName, setSelectedName] = useState('');

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
            <li
              name="Namju"
              onClick={handleNameClick}
              className={selectedName === 'Namju' && 'active'}
            >
              Namju
            </li>
            <li
              name="Jeongdo"
              onClick={handleNameClick}
              className={selectedName === 'Jeongdo' && 'active'}
            >
              Jeongdo
            </li>
            <li
              name="Chungkyu"
              onClick={handleNameClick}
              className={selectedName === 'Chungkyu' && 'active'}
            >
              Chungkyu
            </li>
            <li
              name="Hyeongtaek"
              onClick={handleNameClick}
              className={selectedName === 'Hyeongtaek' && 'active'}
            >
              Hyeongtaek
            </li>
            <li
              name="Jiyeon"
              onClick={handleNameClick}
              className={selectedName === 'Jiyeon' && 'active'}
            >
              Jiyeon
            </li>
            <li
              name="Changhyun"
              onClick={handleNameClick}
              className={selectedName === 'Changhyun' && 'active'}
            >
              Changhyun
            </li>
          </ul>
        </nav>
        <section className="memberStoryWrap">
          <div
            className={selectedName === '' ? 'emptyStory active' : 'emptyStory'}
          >
            <p className="emptyStoryP">Select a name above!</p>
          </div>
          <div
            className={
              selectedName === 'Namju' ? 'memberStory active' : 'memberStory'
            }
          >
            <img
              alt="namju"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02MC4LEMU4-be5c9baf2b08-512"
            />
            <p>
              첫 프로젝트를 여러분들과 함께 할 수 있어서 영광이었습니다... 잘
              수고하셨고 고마워요 여러분.... <br />
              힘들기도 했지만, 재미있기도 했었어요. 그건 다 여러분들과 함께여서
              그렇습니다. <br /> 회식을 못가서 정말 죄송하고... 또 만나요
            </p>
          </div>
          <div
            className={
              selectedName === 'Jeongdo' ? 'memberStory active' : 'memberStory'
            }
          >
            <img
              alt="jeongdo"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02M6TUD7QD-9dda35f43088-512"
            />
            <p>
              주라보팀 모두 고생 많으셨습니다! 멋진 팀원분들과 함께여서 프로젝트
              정말 재미있게 한 것 같아요! 2차 프로젝트도 화이팅입니다~~~!
            </p>
          </div>
          <div
            className={
              selectedName === 'Chungkyu' ? 'memberStory active' : 'memberStory'
            }
          >
            <img
              alt="chungkyu"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02M9TDL1HR-dd480d4249d9-512"
            />
            <p>
              R : eunion 하고싶은팀이에요
              <br /> E : nergy가 부족한 저에게 힘을 북돋아줬어요
              <br /> F : ull stack 개발자까지 화이팅
              <br /> U : guys 다음프로젝트 때도
              <br /> N : o problem 하시고
              <br /> D : oing great 하세요
            </p>
          </div>
          <div
            className={
              selectedName === 'Hyeongtaek'
                ? 'memberStory active'
                : 'memberStory'
            }
          >
            <img
              alt="hyungtaek"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02M6TU11LM-922d1655d29a-512"
            />
            <p>형택의 코멘트... 기다립니다</p>
          </div>
          <div
            className={
              selectedName === 'Jiyeon' ? 'memberStory active' : 'memberStory'
            }
          >
            <img
              alt="jiyeon"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02REJ4S1S9-7c1b8068516e-512"
            />
            <p>지연의 코멘트... 기다립니다</p>
          </div>
          <div
            className={
              selectedName === 'Changhyun'
                ? 'memberStory active'
                : 'memberStory'
            }
          >
            <img
              alt="changhyun"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02M9TE01PD-76dbb65c2559-512"
            />
            <p>창현의 코멘트... 기다립니다</p>
          </div>
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
