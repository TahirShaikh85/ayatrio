import React, { useState } from 'react';
import './imagecaresoul.css'; // Assuming your CSS file is named Carousel.css

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagest = [
    "https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/4ee98f0f-73df-41fe-8006-4484413a1249.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/dbbab7f7-c01c-4802-9ad9-f87def795edc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-855668970469413787/original/15a0762f-b9ca-40a1-b596-900e9450d181.jpeg?im_w=720",
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    let index = activeIndex;
    let length = imagest.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    goToSlide(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    let length = imagest.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    goToSlide(index);
  };


  const [touchPosition, setTouchPosition] = useState(null); // New state for tracking touch position
   // Function to handle the start of a touch
   const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  // Function to handle the end of a touch
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if(touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      goToNextSlide();
    }

    if (diff < -5) {
      goToPrevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <section aria-label="Newest Photos" className='sm:hidden block '>
      <div className="carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
       
        <ul>
          {imagest.map((src, index) => (
            <li key={src} className={`slide ${index === activeIndex ? 'active' : ''}`}>
              <img src={src} alt="" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
      <div className="indicators flex items-center"> 
        {imagest.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;