/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import { CardItem } from '../CardItem/CardItem';
import { DropdownCustom } from '../Dropdown/DropdownCustom';
import { Pagination } from '../Pagination';
import cl from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActivated, setIsActivated] = useState('');
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('perPage') || 'All';
  const sortBy = searchParams.get('sortBy') || 'Newest';

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
    updateSearchParams({ page: event.currentTarget.innerHTML || null });
  }

  function onPerPageChange(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    updateSearchParams({ perPage: event.currentTarget.innerHTML || null });
  }

  function onSortChange(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    updateSearchParams({ sortBy: event.currentTarget.innerHTML || null });
  }

  return (
    <div className={cl.container}>

      <div className={cl.breadscrumbs_wrapper}>
        <Breadscrumbs category="Phones" />
      </div>

      <h1 className={cl.title}>Mobile phones</h1>

      <span className={cl.models_amount}>71 models</span>

      <div className={cl.dropdown_wrapper}>
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

      <div className={cl.phones_container}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <div className={cl.pagination_wrapper}>
        <Pagination
          total={71}
          currentParams={searchParams}
          onPageChange={onPageChange}
          onArrowPageChange={updateSearchParams}
        />
      </div>
    </div>
  );
};
