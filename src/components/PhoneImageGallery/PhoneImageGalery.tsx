/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC, useCallback, useEffect, useState,
} from 'react';

import cl from './PhoneImageGallery.module.scss';

interface Props {
  images: string[] | undefined;
}

export const PhoneImageGalery:FC<Props> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images?.[0]);
  const ImgUrl = 'https://product-catalog-be-s8k7.onrender.com/';

  const handleChangeImage = useCallback((image: string) => {
    setMainImage(image);
  }, []);

  useEffect(() => {
    setMainImage(images?.[0]);
  }, [images]);

  return (
    <div className={cl.images}>
      <div className={cl.images__current}>
        <img
          src={`${ImgUrl}${mainImage}`}
          alt="current"
        />
      </div>

      <div className={cl.images__all}>
        {images?.map((image) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={image}
            onClick={() => handleChangeImage(image)}
          >
            <div className={cl.images__container}>
              <img
                src={`${ImgUrl}${image}`}
                alt="phone_image"
                className={cl.images__img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
