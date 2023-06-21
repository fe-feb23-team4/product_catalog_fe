import React, { FC } from 'react';
import cn from 'classnames';
import cl from './Dropdown.module.scss';
import arrowUp from '../../assets/ArrowUp.svg';
import arrowDown from '../../assets/ArrowDown.svg';

interface Props {
  options: string[];
  handleSelect: (
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => void;
  isActive: boolean;
  handleClick: (value: boolean) => void;
  header: string;
  currentOption: string;
}

export const DropdownCustom: FC<Props> = ({
  options,
  handleSelect,
  isActive,
  handleClick,
  header,
  currentOption,
}) => {
  return (
    <div className={cl.container}>
      <span className={cl.title}>{header}</span>

      <div className={cl.dropdown}>
        <button
          className={cl.button}
          type="button"
          onClick={() => handleClick(!isActive)}
        >
          {currentOption}
          <img src={isActive ? arrowDown : arrowUp} alt="selection-arrow" />
        </button>
        <ul
          className={cn(cl.list, {
            [cl.hidden]: !isActive,
          })}
        >
          {options.map((option) => (
            <li className={cl.list_item} key={option}>
              <a
                className={cl.link}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(!isActive);
                  handleSelect(event);
                }}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
