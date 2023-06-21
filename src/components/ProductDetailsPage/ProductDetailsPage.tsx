/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cl from './ProductDetailsPage.module.scss';
import arrowRight from '../../assets/ArrowRight.svg';
import arrowLeft from '../../assets/ArrowLeft.svg';
import home from '../../assets/Home.svg';
import heart from '../../assets/Heart.svg';
import { getPhonesRecommended, getPhoneById } from '../../api/phones';
import { useMyContext } from '../../Context/MyContext';
import { PhoneProduct } from '../../types/PhoneProduct';
import { CardList } from '../CardList';
import { PhoneImageGalery } from '../PhoneImageGallery';

export const ProductDetailsPage = () => {
  const {
    phonesListRecommended,
    setPhonesListRecommended,
  } = useMyContext();

  const [phone, setPhone] = useState<PhoneProduct | null>(null);
  const { phoneId } = useParams();

  const navigation = useNavigate();

  useEffect(() => {
    const fetchedPhonesRecommended = async () => {
      try {
        if (!phoneId) {
          return;
        }

        const fetchedPhoneRecomend = await getPhonesRecommended(phoneId);

        setPhonesListRecommended(fetchedPhoneRecomend.data);
      } catch {
        throw new Error('Failed to fetch data');
      }
    };

    fetchedPhonesRecommended();
  }, [phoneId]);

  useEffect(() => {
    const fetchPhoneAbout = async () => {
      try {
        const fetchedPhoneAbout = await getPhoneById(phoneId || '');

        setPhone(fetchedPhoneAbout.data);
      } catch {
        throw new Error('Failes to fetch');
      }
    };

    fetchPhoneAbout();
  }, [phoneId]);

  const handleNavigateColor = (color:string) => {
    navigation(`/phones/${phone?.namespaceId}-${phone?.capacity}-${color}`);
  };

  const handleNavigateCapacity = (capacity:string) => {
    navigation(`/phones/${phone?.namespaceId}-${capacity.toLowerCase()}-${phone?.color}`);
  };

  return (
    <div className={cl.product_page}>
      <div className={cl.product_page__wrapper}>
        <div className={cl.product_page__breadcrumbs}>
          <div className={cl.product_page__breadcrumbs__item}>
            <img src={home} alt="home" />
          </div>

          <img src={arrowRight} alt="arrow" />

          <div className={cl.product_page__breadcrumbs__item}>
            <Link to="/phones">Phones</Link>
          </div>

          <img src={arrowRight} alt="arrow" />

          <div className={cl.product_page__breadcrumbs__item}>
            <span>{phone?.name}</span>
          </div>

        </div>

        <button
          className={cl.product_page__back_btn}
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          <img src={arrowLeft} alt="arrow" />
          Back
        </button>

        <h1 className={cl.product_page__title}>
          {phone?.name}
        </h1>

        <div className={cn(
          cl.product_page__content,
          cl.grid,
        )}
        >
          <PhoneImageGalery images={phone?.images} />

          <div className={cn(
            cl.product_page__content__params,
            cl.grid__item__desktop_14_20,
            cl.grid__item__tablet_9_12,
          )}
          >
            <div className={cl.product_page__content__params}>
              <div className={cl.product__text}>
                <div>Available colors</div>
              </div>

              <div className={cl.product__colors}>
                {phone?.colorsAvailable.map((color) => (
                  <Link
                    to={`/phones/${phone.namespaceId}-${phone.capacity.toLowerCase()}-${color}`}
                    key={color}
                  >
                    <div className={cl.product__colors__color}>
                      <button
                        type="button"
                        className={cn(
                          cl.product__colors__color_button,
                        )}
                        onClick={() => handleNavigateColor(color)}
                      >
                        {color}
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              <div className={cl.separate__line}> </div>

              <div className={cl.product__text}>Select capacity</div>

              <div className={cl.product__capacities}>
                {phone?.capacityAvailable.map((capacity) => (
                  <Link
                    to={`/phones/${phone.namespaceId}-${capacity.toLowerCase()}-${phone.color}`}
                    key={capacity}
                  >
                    <div className={cl.product__capacities__capacity}>
                      <button
                        type="button"
                        className={cl.product__capacities__capacity_button}
                        onClick={() => (
                          handleNavigateCapacity(capacity)
                        )}
                      >
                        {capacity}
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              <div className={cl.separate__line}> </div>

              <div className={cl.product__price}>
                <h2 className={cl.product__price__new}>{`${phone?.priceDiscount}$`}</h2>
                <div className={cl.product__price__old}>{`${phone?.priceRegular}$`}</div>
              </div>

              <div className={cl.product__purchase_buttons}>
                <button
                  type="button"
                  className={cl.product__purchase_buttons__to_cart}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className={cl.product__purchase_buttons__to_favourite}
                >
                  <img src={heart} alt="to favourite" />
                </button>
              </div>

              <div className={cl.product__properties}>
                <div className={cl.product__properties__property}>
                  <div className={cl.product__properties__property_name}>
                    Screen
                  </div>
                  <div className={cl.product__properties__property_value}>
                    {phone?.screen}
                  </div>
                </div>

                <div className={cl.product__properties__property}>
                  <div className={cl.product__properties__property_name}>
                    Resolution
                  </div>
                  <div className={cl.product__properties__property_value}>
                    {phone?.resolution}
                  </div>
                </div>

                <div className={cl.product__properties__property}>
                  <div className={cl.product__properties__property_name}>
                    Processor
                  </div>
                  <div className={cl.product__properties__property_value}>
                    {phone?.processor}
                  </div>
                </div>

                <div className={cl.product__properties__property}>
                  <div className={cl.product__properties__property_name}>
                    RAM
                  </div>
                  <div className={cl.product__properties__property_value}>
                    {phone?.ram}
                  </div>
                </div>
              </div>

              <h3 className={cl.product__h3_title}>About</h3>

              <div className={cl.separate__line}> </div>

              <h4 className={cl.product__h4_title}>{phone?.description[0].title}</h4>

              <p className={cl.product__paragraph}>
                {phone?.description[0].text}
              </p>

              <h4 className={cl.product__h4_title}>{phone?.description[1].title}</h4>

              <p className={cl.product__paragraph}>
                {phone?.description[1].text}
              </p>

              <h4 className={cl.product__h4_title}>{phone?.description[2].title}</h4>

              <p className={cl.product__paragraph}>
                {phone?.description[2].text}
              </p>
            </div>
          </div>
        </div>
        <CardList phones={phonesListRecommended} title="You may also like" />
      </div>
    </div>
  );
};
