/* eslint-disable no-console */
import { FC, MouseEventHandler } from 'react';
import cn from 'classnames';
import cl from './Pagination.module.scss';
import leftArrowLight from '../../assets/ArrowLeftLight.svg';
import rightArrowLight from '../../assets/ArrowRightLight.svg';
import leftArrow from '../../assets/ArrowLeft.svg';
import rightArrow from '../../assets/ArrowRight.svg';

interface Props {
  currentParams: URLSearchParams;
  total: number;
  onPageChange: MouseEventHandler<HTMLAnchorElement>;
  onArrowPageChange: (params: { [key: string]: string | null }) => void;
}

export const Pagination: FC<Props> = ({
  total,
  currentParams,
  onPageChange,
  onArrowPageChange,
}) => {
  const currentPage = Number(currentParams.get('page')) || 1;
  const currentPerPage = Number(currentParams.get('perPage')) || 71;
  const limitOfPageCount = Math.ceil(total / currentPerPage);
  const pageCounts = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= limitOfPageCount; i++) {
    pageCounts.push(i);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCounts.length;

  return (
    <>
      <ul className={cl.list}>
        <li
          className={cn(cl.list_item, {
            [cl.list_item__disabled]: isFirstPage,
          })}
        >
          <a
            className={cl.link}
            href="/"
            aria-disabled={isFirstPage}
            onClick={(event) => {
              event.preventDefault();
              if (isFirstPage) {
                return;
              }

              onArrowPageChange({ page: String(currentPage - 1) });
            }}
          >
            <img
              src={isFirstPage ? leftArrow : leftArrowLight}
              alt="pagination-left-arrow"
            />
          </a>
        </li>
        {pageCounts.map((page) => (
          <li
            className={cn(cl.list_item, { [cl.active]: page === +currentPage })}
            key={page}
          >
            <a
              className={cl.link}
              href="/"
              onClick={(event) => {
                onPageChange(event);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={cn(cl.list_item, { [cl.list_item__disabled]: isLastPage })}
        >
          <a
            className={cl.link}
            href="/"
            aria-disabled={isLastPage}
            onClick={(event) => {
              event.preventDefault();
              if (isLastPage) {
                return;
              }

              onArrowPageChange({ page: String(currentPage + 1) });
            }}
          >
            <img
              src={isLastPage ? rightArrow : rightArrowLight}
              alt="pagination-right-arrow"
            />
          </a>
        </li>
      </ul>
    </>
  );
};
