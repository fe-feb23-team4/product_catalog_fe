import cn from 'classnames';
import cl from './ProductDetailsPage.module.scss';
import { CardItem } from '../CardItem';

export const ProductDetailsPage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.grid}>
        <div
          className={cn(
            cl.grid__item,
            cl.grid__item__mobile_1_4,
            cl.grid__item__tablet_1_12,
            cl.grid__item__desktop_1_24,
          )}
        >
          <div className={cl.scelet_line} />
          <div className={cl.scelet_title} />
        </div>
      </div>

      <div className={cl.scelet_settings}>
        <div className={cl.grid}>
          <div
            className={cn(
              cl.grid__item,
              cl.grid__item__mobile_1_4,
              cl.grid__item__tablet_1_12,
              cl.grid__item__desktop_1_24,
            )}
          >
            <div className={cl.scelet_settings__container}>
              <div className={cl.scelet_settings__container_colors}>
                <p className={cl.scelet_settings__title}>Available colors</p>
                <p
                  className={cn(
                    cl.scelet_settings__title,
                    cl.scelet_settings__title__id,
                  )}
                >
                  ID:
                  <div className={cl.scelet_settings__title_div} />
                </p>
              </div>

              <div className={cl.scelet_settings__colors}>
                <div className={cl.scelet_settings__button_color}>
                  <div
                    className={cn(
                      cl.scelet_settings__color,
                      cl.scelet_settings__color__none,
                    )}
                  />
                </div>

                <div className={cl.scelet_settings__button_color}>
                  <div
                    className={cn(
                      cl.scelet_settings__color,
                      cl.scelet_settings__color__none,
                    )}
                  />
                </div>

                <div className={cl.scelet_settings__button_color}>
                  <div
                    className={cn(
                      cl.scelet_settings__color,
                      cl.scelet_settings__color__none,
                    )}
                  />
                </div>
              </div>
            </div>

            <p className={cl.scelet_settings__title}>Select capacity</p>

            <div className={cl.scelet_settings__capacities}>
              <div className={cl.scelet_settings__button_capacity}>
                <div className={cl.scelet_settings__button_capacity_in} />
              </div>
              <div className={cl.scelet_settings__button_capacity}>
                <div className={cl.scelet_settings__button_capacity_in} />
              </div>
              <div className={cl.scelet_settings__button_capacity}>
                <div className={cl.scelet_settings__button_capacity_in} />
              </div>
            </div>

            <div className={cl.scelet_settings__add_header}>
              <div className={cl.scelet_settings__add_current_price}>
                &#36;0000
              </div>
              <div className={cl.scelet_settings__add_prev_price}>
                &#36;0000
              </div>
            </div>

            <div className={cl.scelet_settings__add_buttons}>
              <div />

              <div />
            </div>

            <div className={cl.scelet_settings__buttons}>
              <div className={cl.scelet_settings__cart_button} />
              <div className={cl.scelet_settings__fav_button} />
            </div>

            <div className={cl.scelet_settings__add_tablet}>
              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>screen</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>resolution</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>processor</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>RAM</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={cl.scelet_about}>
        <div className={cl.grid}>
          <div
            className={cn(
              cl.grid__item,
              cl.grid__item__mobile_1_4,
              cl.grid__item__tablet_1_12,
              cl.grid__item__desktop_1_12,
            )}
          >
            <div>
              <h2 className={cl.scelet_about__title}>About</h2>

              <div className={cl.scelet_about__content}>
                <div className={cl.scelet_about__container}>
                  <div className={cl.scelet_about__small_title}>content</div>

                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />

                  <h3 className={cl.scelet_about__small_title}>content</h3>

                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                  <div className={cl.scelet_about__text} />
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              cl.grid__item,
              cl.grid__item__mobile_1_4,
              cl.grid__item__tablet_1_12,
              cl.grid__item__desktop_14_24,
            )}
          >
            <h2 className={cl.scelet_about__title}>Tech specs</h2>

            <div className={cl.scelet_about__content}>
              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>screen</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>resolution</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>processor</p>
                <p className={cl.scelet_about__option_content}>content</p>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>RAM</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>Built in memory</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>camera</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>zoom</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>

              <div className={cl.scelet_about__option}>
                <p className={cl.scelet_about__option_name}>cell</p>
                <div className={cl.scelet_about__option_content}>content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cl.scelet_slider}>
        <div className={cl.grid}>
          <div
            className={cn(
              cl.grid__item,
              cl.grid__item__mobile_1_4,
              cl.grid__item__tablet_1_12,
              cl.grid__item__desktop_1_24,
            )}
          >
            <div className={cl.scelet_slider__carts}>
              <CardItem />
              {/* <CardItem />
              <CardItem />
              <CardItem /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
