import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './HomePage.module.scss';
import 'swiper/swiper.min.css';
import { CardList } from '../CardList';

export const HomePage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.grid}>
        <h1
          className={`${cl.title} 
          ${cl.grid__item} 
          ${cl.grid__item__desktop_1_17} 
          ${cl.grid__item__tablet_1_6}  
          ${cl.grid__item__mobile_1_4}`}
        >
          Welcome to Nice Gadgets store!
        </h1>

        <Swiper
          className={`${cl.grid__item} 
          ${cl.grid__item__desktop_1_24} 
          ${cl.grid__item__tablet_1_12} 
          ${cl.grid__item__mobile_1_4}`}
          navigation
        >
          <SwiperSlide>
            <img
              src="/product_catalog_fe/carousel/carousel_1.png"
              alt="carousel"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/product_catalog_fe/carousel/carousel_1.png"
              alt="carousel"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/product_catalog_fe/carousel/carousel_1.png"
              alt="carousel"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <CardList />
    </div>
  );
};
