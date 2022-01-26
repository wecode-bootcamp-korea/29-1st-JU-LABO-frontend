import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  SLIDER_DATA,
  BREWERY_DATA,
  SOUL_DATA,
  COLLECTIONS_DATA,
  COLLECTIONS_IMG_DATA,
} from './MAIN_DATA';
import Maincard from './Maincard';
import './Main.scss';

const Main = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [brewerySelect, setBrewerySelect] = useState(0);
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    'transform 500ms ease-in-out'
  );
  const [colBgImg, setColBgImg] = useState(COLLECTIONS_IMG_DATA.wine);
  const [selectedCollection, setSelectedCollection] = useState('wine');

  useEffect(() => {
    const mainBannerTime = setTimeout(() => {
      const mainSliderlength = SLIDER_DATA.length;
      setCurrSlide(currSlide === mainSliderlength - 1 ? 0 : currSlide + 1);
    }, 5000);

    return () => clearTimeout(mainBannerTime);
  });

  const nextSlide = () => {
    const mainSliderlength = SLIDER_DATA.length;
    setCurrSlide(currSlide === mainSliderlength - 1 ? 0 : currSlide + 1);
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
      replaceToN(1);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const prevSoulsCarousel = () => {
    const soulSliderLength = SOUL_DATA.length;

    const newCurr = currCarousel - 1;
    setCurrCarousel(newCurr);

    if (newCurr === 0) {
      replaceToN(soulSliderLength);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const replaceToN = n => {
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
            className={index === currSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currSlide && (
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

      <section className="seasons">
        <h1>THEMES</h1>
        <h2>
          We categorize our choice of beverages in themes of four seasons.
        </h2>
        <div className="seasonsCardContainer">
          <Link to="/main" className="seasonsCard">
            <div className="seasonsCardImage spring" />
            <h3>SPRING</h3>
            <h4>Fresh breeze and floral sweetness, easy to drink.</h4>
          </Link>
          <Link to="/main" className="seasonsCard">
            <div className="seasonsCardImage summer" />
            <h3>SUMMER</h3>
            <h4>Scents of summer beach, coconut rum and more</h4>
          </Link>
          <Link to="/main" className="seasonsCard">
            <div className="seasonsCardImage autumn" />
            <h3>AUTUMN</h3>
            <h4>Cozy gatherings around the bonfire.</h4>
          </Link>
          <Link to="/main" className="seasonsCard">
            <div className="seasonsCardImage winter" />
            <h3>WINTER</h3>
            <h4>Warm your body up with vin chaud and vodka.</h4>
          </Link>
        </div>
      </section>

      <section className="brewery">
        <h1>BREWERY</h1>
        <h2>
          We host various local breweries of Korea, that are manufacturing
          high-quality beverages with local ingredients. Thanks to the
          breweries' efforts and hard work, we can provide fresh beverages at
          all moments.
        </h2>
        <article className="breweryContainer">
          <ul className="breweryList">
            {BREWERY_DATA.map((brewery, index) => {
              return (
                <li
                  className={
                    index === brewerySelect
                      ? 'breweryItem active'
                      : 'breweryItem'
                  }
                  key={index}
                  index={index}
                  onClick={handleBreweryClick}
                >
                  <div className="breweryTitle">
                    <h3>{brewery.brewery.toUpperCase()}</h3>
                    <h4>{brewery.location}</h4>
                  </div>
                  <i className="fas fa-chevron-right" />
                </li>
              );
            })}
          </ul>
          <div className="breweryImageWrap">
            {BREWERY_DATA.map((brewery, index) => (
              <div
                className={
                  index === brewerySelect
                    ? 'breweryImageBlock active'
                    : 'breweryImageBlock'
                }
                key={index}
              >
                <img
                  className="breweryImage"
                  src={brewery.image}
                  alt={brewery.brewery}
                />
                <p className="breweryDescription">
                  {BREWERY_DATA[brewerySelect].description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="souls">
        <h1>SOULS</h1>
        <h2>Lab Technicians at Work</h2>
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
                <img className="soulsSliderImage1" src={data[0]} />
                <div className="soulsSliderImage1-2">
                  <img className="soulsSliderImage2" src={data[1]} />
                  <img className="soulsSliderImage3" src={data[2]} />
                </div>
              </div>
            ))}
          </div>
          <i class="fas fa-chevron-left" onClick={prevSoulsCarousel} />
          <i class="fas fa-chevron-right" onClick={nextSoulsCarousel} />
        </article>
      </section>

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
        <img className="collectionsBg" src={colBgImg} />
      </section>

      <div className="blankDiv">
        <img src="/images/julabo_logo.png" />
      </div>
    </main>
  );
};

export default Main;
