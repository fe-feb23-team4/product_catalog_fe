import React, { useEffect, useState } from 'react';
import { getPhonesNew } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { CardItem } from '../CardItem';
import cl from './CardList.module.scss';
import { Arrow } from '../Arrow';

export function CardList() {
  const [phonesList, setPhonesList] = useState<Phone[]>([]);
  const [slideCounter, setSlideCounter] = useState(0);

  const fetchPhones = async () => {
    const response = await getPhonesNew();

    setPhonesList(response.data);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className={cl.list}>
      <div className={cl.wrapper}>
        <h2 className={cl.title}>Text</h2>
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
        {phonesList.map((phone) => (
          <React.Fragment key={phone.id}>
            <CardItem phone={phone} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
