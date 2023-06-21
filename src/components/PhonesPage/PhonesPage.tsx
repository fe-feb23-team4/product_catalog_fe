/* eslint-disable react/jsx-no-bind */
import {
  MouseEvent, useEffect, useRef, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import { CardItem } from '../CardItem/CardItem';
import { DropdownCustom } from '../Dropdown/DropdownCustom';
import { Pagination } from '../Pagination';
import { getPhones } from '../../api/phones';
import cl from './PhonesPage.module.scss';
import { Loader } from '../Loader';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[] | []>([]);
  const [phonesAmount, setPhonesAmount] = useState(71);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActivated, setIsActivated] = useState('');
  const page: string = searchParams.get('page') || '1';
  const perPage: string = searchParams.get('perPage') || 'All';
  const sortBy: string = searchParams.get('sortBy') || 'Name';

  function updateSearchParams(params: { [key: string]: string | null }) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    setSearchParams(searchParams);
  }

  function onPageChange(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    window.scrollTo(0, 0);
    updateSearchParams({ page: event.currentTarget.innerHTML || null });
  }

  function onPerPageChange(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    updateSearchParams({
      perPage: event.currentTarget.innerHTML || null,
      page: '1',
    });
  }

  function onSortChange(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    updateSearchParams({
      sortBy: event.currentTarget.innerHTML || null,
      perPage: 'All',
      page: '1',
    });
  }

  useEffect(() => {
    const setVisiblePhones = async () => {
      try {
        const normalizedPerPage = perPage === 'All' ? '71' : perPage;
        const allPhones = await getPhones(
          page,
          normalizedPerPage,
          sortBy,
          'phones',
        );

        const { count, products } = allPhones.data;

        setPhonesAmount(count);
        setPhones(products);
      } catch (error) {
        throw new Error();
      } finally {
        setIsLoading(false);
      }
    };

    setVisiblePhones();
  }, [page, perPage, sortBy]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current
      && !dropdownRef.current.contains(event.target as Node)) {
      setIsActivated('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={cl.wrapper}>
      <div className={cl.container}>
        <div className={cl.breadscrumbs_wrapper}>
          <Breadscrumbs category="Phones" />
        </div>

        <h1 className={cl.title} id="title_mobile_phones">Mobile phones</h1>

        <span className={cl.models_amount}>{`${phonesAmount} models`}</span>

        <div className={cl.dropdown_wrapper} ref={dropdownRef}>
          <DropdownCustom
            options={['Name', 'Newest', 'Price-Up', 'Price-Down']}
            handleSelect={onSortChange}
            isActive={isActivated === 'Sort by'}
            handleClick={() => {
              if (isActivated !== 'Sort by') {
                setIsActivated('Sort by');
              } else {
                setIsActivated('');
              }
            }}
            header="Sort by"
            currentOption={sortBy}
          />

          <DropdownCustom
            options={['4', '8', '16', '32', 'All']}
            handleSelect={onPerPageChange}
            isActive={isActivated === 'Items on page'}
            handleClick={() => {
              if (isActivated !== 'Items on page') {
                setIsActivated('Items on page');
              } else {
                setIsActivated('');
              }
            }}
            header="Items on page"
            currentOption={perPage}
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className={cl.phones_container}>
            {phones.map((phone) => (
              <CardItem phone={phone} key={phone.id} />
            ))}
          </div>
        )}

        <div className={cl.pagination_wrapper}>
          <Pagination
            total={phonesAmount}
            currentParams={searchParams}
            onPageChange={onPageChange}
            onArrowPageChange={updateSearchParams}
          />
        </div>
      </div>
    </div>
  );
};
