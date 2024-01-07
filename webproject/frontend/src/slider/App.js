// App.js
import React from 'react';
import CardSlider from './slide';

const App = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'images/1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'images/2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'images/12.jpg',
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'images/1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'images/2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'images/12.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <div>
      <h1>Your Card Slider App</h1>
      <CardSlider cardData={cardData} />
    </div>
  );
};

export default App;
