import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SLIDER_DATA, BREWERY_DATA, SOUL_DATA } from './MAIN_DATA';
import './Main.scss';

const Main = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const mainSliderlength = SLIDER_DATA.length;

  const [brewerySelect, setBrewerySelect] = useState(0);

  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    'transform 500ms ease-in-out'
  );

  const soulSliderLength = SOUL_DATA.length;

  const makeNewDataArray = arr => {
    const dataStart = arr[0];
    const dataEnd = arr[arr.length - 1];
    const modifiedArray = [dataEnd, ...arr, dataStart];

    return modifiedArray;
  };

  useEffect(() => {
    const mainBannerTime = setTimeout(() => {
      setCurrSlide(currSlide === mainSliderlength - 1 ? 0 : currSlide + 1);
    }, 5000);

    return () => clearTimeout(mainBannerTime);
  });

  const nextSlide = () => {
    setCurrSlide(currSlide === mainSliderlength - 1 ? 0 : currSlide + 1);
  };

  // BREWERY

  const handleBreweryClick = e => {
    const current = brewerySelect;
    const next = e.target.getAttribute('index');
    setBrewerySelect(brewerySelect + (next - current));
  };

  // SOULS CAROUSEL

  const nextSoulsCarousel = () => {
    const newCurr = currCarousel + 1;
    setCurrCarousel(newCurr);

    if (newCurr === soulSliderLength + 1) {
      replaceToN(1);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const prevSoulsCarousel = () => {
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

  return (
    <main className="Main">
      <section className="MainBanner">
        {/* <i className="fas fa-arrow-circle-left LeftArrow" onClick={prevSlide} />
        <i
          className="fas fa-arrow-circle-right RightArrow"
          onClick={nextSlide}
        /> */}
        {SLIDER_DATA.map((slide, index) => (
          <div
            className={index === currSlide ? 'Slide Active' : 'Slide'}
            key={index}
          >
            {index === currSlide && (
              <img
                alt="slider"
                src={slide.image}
                className="SliderImage"
                onClick={nextSlide}
              />
            )}
          </div>
        ))}
      </section>

      <div className="blankDiv" />

      <section className="Seasons">
        <h1>THEMES</h1>
        <h2>
          We categorize our choice of beverages in themes of four seasons.
        </h2>
        <div className="SeasonsCardContainer">
          <Link to="/main" className="SeasonsCard">
            <div className="SeasonsCardImage Spring" />
            <h3>SPRING</h3>
            <h4>Fresh breeze and floral sweetness, easy to drink.</h4>
          </Link>
          <Link to="/main" className="SeasonsCard">
            <div className="SeasonsCardImage Summer" />
            <h3>SUMMER</h3>
            <h4>Scents of summer beach, coconut rum and more</h4>
          </Link>
          <Link to="/main" className="SeasonsCard">
            <div className="SeasonsCardImage Autumn" />
            <h3>AUTUMN</h3>
            <h4>Cozy gatherings around the bonfire.</h4>
          </Link>
          <Link to="/main" className="SeasonsCard">
            <div className="SeasonsCardImage Winter" />
            <h3>WINTER</h3>
            <h4>Warm your body up with vin chaud and vodka.</h4>
          </Link>
        </div>
      </section>

      <section className="Brewery">
        <h1>BREWERY</h1>
        <h2>
          We host various local breweries of Korea, that are manufacturing
          high-quality beverages with local ingredients. Thanks to the
          breweries' efforts and hard work, we can provide fresh beverages at
          all moments.
        </h2>
        <article className="BreweryContainer">
          <ul className="BreweryList">
            {BREWERY_DATA.map((brewery, index) => {
              return (
                <li
                  className={
                    index === brewerySelect
                      ? 'BreweryItem Active'
                      : 'BreweryItem'
                  }
                  key={index}
                  index={index}
                  onClick={handleBreweryClick}
                >
                  <div className="BreweryTitle">
                    <h3>{brewery.brewery.toUpperCase()}</h3>
                    <h4>{brewery.location}</h4>
                  </div>
                  <i className="fas fa-chevron-right" />
                </li>
              );
            })}
          </ul>
          <div className="BreweryImageWrap">
            {BREWERY_DATA.map((brewery, index) => (
              <div
                className={
                  index === brewerySelect
                    ? 'BreweryImageBlock Active'
                    : 'BreweryImageBlock'
                }
                key={index}
              >
                <img
                  className="BreweryImage"
                  src={brewery.image}
                  alt={brewery.brewery}
                />
                <p className="BreweryDescription">
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
    </main>
  );
};

export default Main;
