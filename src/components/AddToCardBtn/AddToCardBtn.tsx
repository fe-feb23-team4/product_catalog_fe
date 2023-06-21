/* eslint-disable @typescript-eslint/no-explicit-any */
import cl from './AddToCardBtn.module.scss';

interface Props {
  isAddToCard: boolean;
  handleAddToCard: (e: any) => void;
}

export const AddToCardBtn: React.FC<Props> = ({
  isAddToCard,
  handleAddToCard,
}) => {
  return (
    <button
      type="button"
      className={`${cl.button} ${isAddToCard ? cl.pressed : ''}`}
      onClick={handleAddToCard}
    >
      {isAddToCard ? 'Added' : 'Add to cart'}
    </button>
  );
};
