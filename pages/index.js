import React from 'react';
import Carousel from '../composents/Carousel';
import About from '../composents/About';
import Valeur from '../composents/Valeur';



const HomePage = () => {
  return (
    <div>
      <Carousel />
      <About/>
      <Valeur/>
    </div>
    
     
  );
};

export default HomePage;