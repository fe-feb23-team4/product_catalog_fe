import React, { useState } from 'react';
import { CardItem } from '../CardItem';
import cl from './CardList.module.scss';
import { Arrow } from '../Arrow';
import { Phone } from '../../types/Phone';

interface Props {
  phones: Phone[];
  title: string;
}
export const CardList:React.FC<Props> = (props) => {
  const [slideCounter, setSlideCounter] = useState(0);

  return (
    <div className={cl.list}>
      <div className={cl.wrapper}>
        <h2 className={cl.title}>{props.title}</h2>
        <div className={cl.arrow__container}>
          <Arrow
            myDisabled={slideCounter === 0}
            handleArrow={() => {
              if (slideCounter !== 0) {
                setSlideCounter((prevState) => prevState - 1);
              }
            }}
          />
          <Arrow
            myDisabled={slideCounter === 6}
            handleArrow={() => {
              if (slideCounter !== 6) {
                setSlideCounter((prevState) => prevState + 1);
              }
            }}
          />
        </div>
      </div>
      <div
        style={{ transform: `translateX(-${25 * slideCounter}%)` }}
        className={cl.list__container}
      >
        {props.phones.map((phone: Phone) => (
          <React.Fragment key={phone.id}>
            <CardItem phone={phone} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
