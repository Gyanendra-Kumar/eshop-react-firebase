import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  //   console.log(slideLength);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
      />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={index}
            className={
              index === currentSlide
                ? `${styles.slide} ${styles.current}`
                : `${styles.slide}`
            }
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className={styles.content}>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#products" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
