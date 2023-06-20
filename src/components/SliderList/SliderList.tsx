import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './SliderList.scss';
import {
  A11y, Navigation, Pagination, Scrollbar,
} from 'swiper';
import React, { PropsWithChildren, useEffect, useState } from 'react';

export const SliderList: React.FC<PropsWithChildren> = (props) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 340) {
        setSlidesPerView(1.10);
      } else if (windowWidth <= 430) {
        setSlidesPerView(1.25);
      } else if (windowWidth <= 470) {
        setSlidesPerView(1.5);
      } else if (windowWidth <= 640) {
        setSlidesPerView(1.5);
      } else if (windowWidth <= 1000) {
        setSlidesPerView(2.5);
      } else if (windowWidth <= 1200) {
        setSlidesPerView(3.5);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-items">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={18}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
      >
        {props.children}
      </Swiper>
    </div>
  );
};
