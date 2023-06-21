/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import cl from './HomePage.module.scss';
import { CardList } from '../CardList';
import { useMyContext } from '../../Context/MyContext';
import { getPhonesDiscount, getPhonesNew } from '../../api/phones';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { Slider } from '../Slider';
import { CategorySection } from '../CategorySection';

export const HomePage = () => {
  const [error, setError] = useState(null);
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
    } catch (e: any) {
      setError(e);
    }
  };

  const fetchPhonesDiscount = async () => {
    try {
      const response = await getPhonesDiscount();

      setPhonesListDiscount(response.data);
    } catch (e: any) {
      setError(e);
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

  return (
    <div className={`${cl.container} ${cl.home}`}>
      <div className={cl.grid}>
        <h1
          className={`${cl.title} 
          ${cl.grid__item__desktop_1_17} 
          ${cl.grid__item__tablet_1_6}  
          ${cl.grid__item__mobile_1_4}`}
        >
          Welcome to Nice Gadgets store!
        </h1>

        <div
          className={`
        ${cl.grid__item__desktop_1_24}
        ${cl.grid__item__tablet_1_12}
        ${cl.grid__item__mobile_1_4}
        `}
        >
          <Slider />
        </div>
      </div>
      {isLoading
        ? <Loader />
        : <CardList phones={phonesListNew} title="Brand new models" />}
      <CategorySection />
      {isLoading
        ? <Loader />
        : <CardList phones={phonesListDiscount} title="Hot prices" />}
    </div>
  );
};
