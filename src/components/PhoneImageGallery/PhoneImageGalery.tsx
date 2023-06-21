/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import cn from 'classnames';

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
    <div className={cn(
      cl.images,
      cl.grid__item__desktop_1_12,
      cl.grid__item__tablet_1_7,
      cl.grid__item__mobile_1_4,
    )}
    >
      <div className={cn(
        cl.images__current__container,
      )}
      >
        <img
          src={`${ImgUrl}${mainImage}`}
          alt="current"
          className={cl.images__current_image}
        />
      </div>

      <div className={cn(
        cl.images__all,
        cl.grid__item__desktop_1_2,
      )}
      >
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
                className={cn(
                  cl.images__img,
                  { [cl.images__img__active]: mainImage === image },
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
