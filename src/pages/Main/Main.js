import React, { useState, useEffect } from 'react';
import Maincard from './Maincard/Maincard';
import MainSection from './MainSection/MainSection';
import ClickList from './ClickList/ClickList';
import {
  SLIDER_DATA,
  SEASONS_DATA,
  BREWERY_DATA,
  SOUL_DATA,
  COLLECTIONS_DATA,
  COLLECTIONS_IMG_DATA,
} from './MAIN_DATA';
import './Main.scss';

const Main = () => {
  const [mainBannerSlide, setMainBannerSlide] = useState(0);
  const [brewerySelect, setBrewerySelect] = useState(0);
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    'transform 500ms ease-in-out'
  );
  const [colBgImg, setColBgImg] = useState(COLLECTIONS_IMG_DATA.wine);
  const [selectedCollection, setSelectedCollection] = useState('wine');

  // MAIN BANNER

  useEffect(() => {
    const mainBannerTime = setTimeout(() => {
      const mainSliderlength = SLIDER_DATA.length;
      setMainBannerSlide(
        mainBannerSlide === mainSliderlength - 1 ? 0 : mainBannerSlide + 1
      );
    }, 5000);
    return () => clearTimeout(mainBannerTime);
  });

  const nextSlide = () => {
    const mainSliderlength = SLIDER_DATA.length;
    setMainBannerSlide(
      mainBannerSlide === mainSliderlength - 1 ? 0 : mainBannerSlide + 1
    );
  };

  // BREWERY

  const handleBreweryClick = e => {
    const current = brewerySelect;
    const next = e.target.getAttribute('index');
    setBrewerySelect(brewerySelect + (next - current));
  };

  // SOULS CAROUSEL
  const makeNewDataArray = arr => {
    const dataStart = arr[0];
    const dataEnd = arr[arr.length - 1];
    const modifiedArray = [dataEnd, ...arr, dataStart];
    return modifiedArray;
  };

  const nextSoulsCarousel = () => {
    const soulSliderLength = SOUL_DATA.length;
    const newCurr = currCarousel + 1;
    setCurrCarousel(newCurr);

    if (newCurr === soulSliderLength + 1) {
      moveToNthSlide(1);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const prevSoulsCarousel = () => {
    const soulSliderLength = SOUL_DATA.length;

    const newCurr = currCarousel - 1;
    setCurrCarousel(newCurr);

    if (newCurr === 0) {
      moveToNthSlide(soulSliderLength);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const moveToNthSlide = n => {
    setTimeout(() => {
      setCarouselTransition('');
      setCurrCarousel(n);
    }, 500);
  };

  // COLLECTIONS

  const handleCollectionsHover = e => {
    const name = e.target.getAttribute('name');
    setColBgImg(COLLECTIONS_IMG_DATA[name]);
    setSelectedCollection(name);
  };

  return (
    <main className="main">
      <section className="mainBanner">
        <div className="mainBannerTitle">
          <h1>酒 LABO</h1>
          <h2>YOUR FAVORITE ONLINE LIQUOR STORE</h2>
        </div>
        {SLIDER_DATA.map((slide, index) => (
          <div
            className={index === mainBannerSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === mainBannerSlide && (
              <img
                alt="slider"
                src={slide.image}
                className="sliderImage"
                onClick={nextSlide}
              />
            )}
          </div>
        ))}
      </section>

      <div className="blankDiv" />

      <MainSection
        className="seasons"
        title="THEMES"
        desc="We categorize our choice of beverages in themes of four seasons."
      >
        <div className="seasonsCardContainer">
          {SEASONS_DATA.map((card, index) => (
            <Maincard
              key={index}
              linkTo={card.linkTo}
              linkClassName={card.linkClassName}
              imgSrc={card.imgSrc}
              imgClassName={card.imgClassName}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </MainSection>

      <MainSection
        className="brewery"
        title="BREWERY"
        desc="We host various local breweries of Korea, that are manufacturing
          high-quality beverages with local ingredients. Thanks to the
          breweries' efforts and hard work, we can provide fresh beverages at
          all moments."
      >
        <ClickList
          clickListClassName="breweryContainer"
          listClassName="breweryList"
          data={BREWERY_DATA}
          selectedState={brewerySelect}
          onClick={handleBreweryClick}
        />
      </MainSection>

      <MainSection
        className="souls"
        title="SOULS"
        desc="Lab Technicians at Work."
      >
        <article className="soulsSlider">
          <div className="soulsSliderWrap">
            {makeNewDataArray(SOUL_DATA).map((data, index) => (
              <div
                className="soulsSliderImageWrap"
                key={index}
                style={{
                  transform: `translateX(-${currCarousel * 100}%)`,
                  transition: `${carouselTransition}`,
                }}
              >
                <img alt="image1" className="soulsSliderImage1" src={data[0]} />
                <div className="soulsSliderImage1-2">
                  <img
                    alt="image2"
                    className="soulsSliderImage2"
                    src={data[1]}
                  />
                  <img
                    alt="image3"
                    className="soulsSliderImage3"
                    src={data[2]}
                  />
                </div>
              </div>
            ))}
          </div>
          <i className="fas fa-chevron-left" onClick={prevSoulsCarousel} />
          <i className="fas fa-chevron-right" onClick={nextSoulsCarousel} />
        </article>
      </MainSection>

      <div className="blankDiv" />

      <section className="collections">
        <div className="collectionsItemsWrap">
          {COLLECTIONS_DATA.map((item, index) => (
            <div
              key={index}
              className={
                selectedCollection === item.name
                  ? 'collectionsItem active'
                  : 'collectionsItem'
              }
              name={item.name}
              onMouseEnter={handleCollectionsHover}
            >
              <h1>{item.name.toUpperCase()}</h1>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <img alt="collections" className="collectionsBg" src={colBgImg} />
      </section>

      <div className="blankDiv">
        <img alt="julabo logo" src="/images/julabo_logo.png" />
      </div>
    </main>
  );
};

export default Main;
