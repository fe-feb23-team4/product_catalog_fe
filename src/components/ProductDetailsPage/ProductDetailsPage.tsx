/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cl from './ProductDetailsPage.module.scss';
import arrowRight from '../../assets/ArrowRight.svg';
import arrowLeft from '../../assets/ArrowLeft.svg';
import home from '../../assets/Home.svg';
import { getPhonesRecommended, getPhoneById } from '../../api/phones';
import { useMyContext } from '../../Context/MyContext';
import { PhoneProduct } from '../../types/PhoneProduct';
import { CardList } from '../CardList';
import { PhoneImageGalery } from '../PhoneImageGallery';
import { normalizeColor } from '../../utils/normalizeColor';
import { FavoriteBtn } from '../FavoriteBtn';
import { AddToCardBtn } from '../AddToCardBtn';

export const ProductDetailsPage = () => {
  const {
    phonesListRecommended,
    setPhonesListRecommended,
  } = useMyContext();

  const [isAddToCard, setIsAddToCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { phoneId } = useParams();
  const [phone, setPhone] = useState<PhoneProduct>();

  useEffect(() => {
    const fetchPhoneAbout = async () => {
      try {
        const fetchedPhoneAbout = await getPhoneById(phoneId || '');

        setPhone(fetchedPhoneAbout.data);
        window.scroll(0, 0);
      } catch {
        throw new Error('Failed to fetch');
      }
    };

    fetchPhoneAbout();
  }, [phoneId]);

  const navigation = useNavigate();

  const handleAction = useCallback(
    (e: any, action: string) => {
      e.stopPropagation();
      if (action === 'addToCard') {
        setIsAddToCard((prevState) => !prevState);
        const storedCardItems = localStorage.getItem('AddedToCard');
        let phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

        if (phoneIds.includes(phone?.id)) {
          phoneIds = phoneIds.filter(
            (id: string) => id !== phone?.id.toString(),
          );
        } else {
          phoneIds.push(phone?.id);
        }

        localStorage.setItem('AddedToCard', JSON.stringify(phoneIds));
      } else if (action === 'addToFavorite') {
        setIsFavorite((prevState) => !prevState);
        const storedFavoriteItems = localStorage.getItem('AddedToFavorite');

        let phoneIds = storedFavoriteItems
          ? JSON.parse(storedFavoriteItems)
          : [];

        if (phoneIds.includes(phone?.id)) {
          phoneIds = phoneIds.filter(
            (id: string) => id !== phone?.id.toString(),
          );
        } else {
          phoneIds.push(phone?.id);
        }

        localStorage.setItem('AddedToFavorite', JSON.stringify(phoneIds));
      }
    },
    [isAddToCard, isFavorite, phone?.id],
  );

  useEffect(() => {
    const storedCardItems = localStorage.getItem('AddedToCard');
    const phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

    setIsAddToCard(phoneIds.includes(phone?.id));
  }, [phone?.id]);

  useEffect(() => {
    const storedFavoriteItems = localStorage.getItem('AddedToFavorite');
    const phoneIds = storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];

    setIsFavorite(phoneIds.includes(phone?.id));
  }, [phone?.id]);

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
            cl.grid__item__mobile_1_4,
          )}
          >
            <div className={cl.product_page__content__params}>
              <div>
                <div className={cl.product__text}>Available colors</div>
              </div>

              <div className={cl.product__colors}>
                {phone?.colorsAvailable.map((color) => {
                  const normalizedColor = normalizeColor(color);

                  return (
                    <Link
                      to={`/phones/${phone.namespaceId}-${phone.capacity.toLowerCase()}-${color}`}
                      key={color}
                    >
                      <div
                        className={cn(
                          cl.product__colors__color,
                        )}
                        style={{ backgroundColor: normalizedColor }}
                      >
                        <button
                          type="button"
                          className={cn(
                            cl.product__colors__color_button,
                          )}
                          onClick={() => handleNavigateColor(color)}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className={cl.separate__line}> </div>

              <div className={cn(
                cl.product__select_capacity,
                cl.product__text,
              )}
              >
                Select capacity
              </div>

              <div className={cl.product__capacities}>
                {phone?.capacityAvailable.map((capacity) => (
                  <Link
                    to={`/phones/${phone.namespaceId}-${capacity.toLowerCase()}-${phone.color}`}
                    key={capacity}
                  >
                    <div className={cl.product__capacities__capacity}>
                      <button
                        type="button"
                        className={cn(
                          cl.product__capacities__capacity_button,
                          {
                            [cl.product__capacities__capacity_button__active]:
                            capacity === phone.capacity,
                          },
                        )}
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
                <AddToCardBtn
                  isAddToCard={isAddToCard}
                  handleAddToCard={(e: any) => handleAction(e, 'addToCard')}
                />
                <FavoriteBtn
                  isFavorite={isFavorite}
                  handleAddToFavorite={(e: any) => {
                    handleAction(e, 'addToFavorite');
                  }}
                />
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
            </div>
          </div>

          <div className={cn(
            cl.about_section,
            cl.grid__item__desktop_1_12,
            cl.grid__item__tablet_1_12,
            cl.grid__item__mobile_1_4,
          )}
          >
            <h3 className={cl.about_section__common_title}>About</h3>

            <div className={cl.separate__line}> </div>

            <h4 className={cl.about_section__subtitle}>
              {phone?.description[0].title}
            </h4>

            <p className={cl.about_section__description}>
              {phone?.description[0].text}
            </p>

            <h4 className={cl.about_section__subtitle}>
              {phone?.description[1].title}
            </h4>

            <p className={cl.about_section__description}>
              {phone?.description[1].text}
            </p>

            <h4 className={cl.about_section__subtitle}>
              {phone?.description[2].title}
            </h4>

            <p className={cl.about_section__description}>
              {phone?.description[2].text}
            </p>
          </div>

          <div className={cn(
            cl.tech_specs_section,
            cl.grid__item__desktop_14_24,
            cl.grid__item__tablet_1_12,
            cl.grid__item__mobile_1_4,
          )}
          >
            <h3 className={cl.tech_specs_section__title}>
              Tech specs
            </h3>

            <div className={cl.separate__line}> </div>

            <div className={cl.tech_specs_section__container}>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>Screen</span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.screen}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>
                  Resolution
                </span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.resolution}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>
                  Processor
                </span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.processor}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>RAM</span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.ram}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>
                  Built in memory
                </span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.capacity}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>Camera</span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.camera}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>Zoom</span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.zoom}
                </span>
              </div>
              <div className={cl.tech_specs_section__properties}>
                <span className={cl.tech_specs_section__property}>Cell</span>

                <span className={cl.tech_specs_section__value}>
                  {phone?.cell}
                </span>
              </div>
            </div>
          </div>
        </div>

        <CardList phones={phonesListRecommended} title="You may also like" />
      </div>
    </div>
  );
};
