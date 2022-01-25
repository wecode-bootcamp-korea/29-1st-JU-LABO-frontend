import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SLIDER_DATA, BREWERY_DATA } from './MAIN_DATA';
import './Main.scss';

const Main = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [brewerySelect, setBrewerySelect] = useState(0);
  const length = SLIDER_DATA.length;

  useEffect(() => {
    const mainBannerTime = setTimeout(() => {
      setCurrSlide(currSlide === length - 1 ? 0 : currSlide + 1);
    }, 5000);

    return () => clearTimeout(mainBannerTime);
  });

  // const prevSlide = () => {
  //   setCurrSlide(currSlide === 0 ? length - 1 : currSlide - 1);
  // };

  const nextSlide = () => {
    setCurrSlide(currSlide === length - 1 ? 0 : currSlide + 1);
  };

  const handleBreweryClick = e => {
    const current = brewerySelect;
    const next = e.target.getAttribute('index');
    setBrewerySelect(brewerySelect + (next - current));
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
            <img
              className="BreweryImage"
              src={BREWERY_DATA[brewerySelect].image}
            />
            <p className="BreweryDescription">
              {BREWERY_DATA[brewerySelect].description}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
