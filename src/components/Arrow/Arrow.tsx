import cl from './Arrow.module.scss';

interface Props {
  myDisabled: boolean;
  handleArrow: () => void;
}

export const Arrow: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.myDisabled}
      onClick={props.handleArrow}
      type="button"
      className={cl.arrow}
    >
      <img src="/product_catalog_fe/arrow_right.svg" alt="arrow" />
    </button>
  );
};
