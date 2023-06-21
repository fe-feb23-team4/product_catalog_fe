import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { CardItem } from '../CardItem';
import cl from './CardList.module.scss';
import { Phone } from '../../types/Phone';
import { SliderList } from '../SliderList/SliderList';

interface Props {
  phones: Phone[];
  title: string;
}
export const CardList: React.FC<Props> = (props) => {
  return (
    <div className={cl.list}>
      <div className={cl.wrapper}>
        <h2 className={cl.title}>{props.title}</h2>
      </div>
      <SliderList>
        {props.phones.map((phone: Phone) => (
          <SwiperSlide key={phone.id}>
            <CardItem phone={phone} />
          </SwiperSlide>
        ))}
      </SliderList>
    </div>
  );
};
