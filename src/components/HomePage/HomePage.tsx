import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './HomePage.module.scss';
import 'swiper/swiper.min.css';
import { CardList } from '../CardList';
import { useMyContext } from '../../Context/MyContext';
import { getPhonesDiscount, getPhonesNew } from '../../api/phones';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';

export const HomePage = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    phonesListNew,
    setPhonesListNew,
    setPhonesListDiscount,
    phonesListDiscount,
  } = useMyContext();
  const fetchPhonesNew = async () => {
    try {
      const response = await getPhonesNew();

      setPhonesListNew(response.data);
      setIsLoading(false);
    } catch {
      setError(true);
    }
  };

  const fetchPhonesDiscount = async () => {
    try {
      const response = await getPhonesDiscount();

      setPhonesListDiscount(response.data);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPhonesNew();
    fetchPhonesDiscount();
  }, []);

  useEffect(() => {
    if (phonesListDiscount.length !== 0 && phonesListNew.length !== 0) {
      setIsLoading(false);
    }
  }, [phonesListDiscount, phonesListNew]);

  if (error) {
    return <ErrorMessage>Error while getting data from server...</ErrorMessage>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`${cl.container} ${cl.home}`}>
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
          ${cl.grid__item__mobile_1_4}
          ${cl.swiper}`}
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
      <CardList phones={phonesListNew} title="Brand new models" />
      <CardList phones={phonesListDiscount} title="Hot prices" />
    </div>
  );
};
