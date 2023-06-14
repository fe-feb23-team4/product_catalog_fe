import cl from './FavoriteBtn.module.scss';

interface Props {
  isFavorite: boolean;
  handleAddToFavorite: () => void;
}

export const FavoriteBtn: React.FC<Props> = ({
  isFavorite,
  handleAddToFavorite,
}) => {
  return (
    <button type="button" className={cl.button} onClick={handleAddToFavorite}>
      {!isFavorite ? (
        <img
          src="/product_catalog_fe/favorite.svg"
          alt="favor"
          className={isFavorite ? cl.pressed : ''}
        />
      ) : (
        <img
          src="/product_catalog_fe/favorite2.svg"
          alt="favor"
          className={isFavorite ? cl.pressed : ''}
        />
      )}
    </button>
  );
};
