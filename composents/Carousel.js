import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/caroussel.module.css';

const Carousel = () => {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const listRef = useRef(null);
  const circleRef = useRef(null);
  const items = [
    { src: '/animalcoeur.jpg', alt: 'Image 1' },
    { src: '/vache.jpg', alt: 'Image 2' },
    { src: '/lapin.jpg', alt: 'Image 3' },
    { src: '/vachenoire.jpg', alt: 'Image 4' },
  ];

  useEffect(() => {
    const updateCarousel = () => {
      const width_item = listRef.current.children[active].offsetWidth;
      const leftTransform = width_item * (active - 1) * -1;
      listRef.current.style.transform = `translateX(${leftTransform}px)`;
    };
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, [active]);

  const handleButtonClick = () => {
    router.push('/projet');
  };

  const nextSlide = () => {
    setActive((prevActive) => Math.min(prevActive + 1, items.length - 1));
  };

  const prevSlide = () => {
    setActive((prevActive) => Math.max(prevActive - 1, 0));
  };

  useEffect(() => {
    const textCircle = "Offrez votre peluche à celui que vous aimez".split('');
    const circle = circleRef.current;
    circle.innerHTML = '';
    textCircle.forEach((value, key) => {
      const newSpan = document.createElement("span");
      newSpan.innerText = value;
      const rotateThisSpan = (360 / textCircle.length) * (key + 1);
      newSpan.style.setProperty('--rotate', `${rotateThisSpan}deg`);
      circle.appendChild(newSpan);
    });
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.list} ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${index === active ? styles.active : ''}`}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className={styles.circle} ref={circleRef}></div>
      <div className={styles.content}>
        <button onClick={handleButtonClick}>Je veux ma peluche</button>
      </div>
      <div className={styles.leftArrow} onClick={prevSlide}>
        {'<'}
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        {'>'}
      </div>
    </div>
  );
};

export default Carousel;