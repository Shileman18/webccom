// CardSlider.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css'; // Import the styles

const CardSlider = ({ cardData }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const props = useSpring({
    transform: `translateX(-${index * (300 + 16)}px)`, // Adjust width and margin as needed
  });

  return (
    <div className="card-slider-container">
      <div className="card-slider">
        <animated.div className="cards" style={props}>
          {cardData.map((card, i) => (
            <div key={i} className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </animated.div>
      </div>
      <button onClick={handlePrev}>&lt; Prev</button>
      <button onClick={handleNext}>Next &gt;</button>
    </div>
  );
};

export default CardSlider;
