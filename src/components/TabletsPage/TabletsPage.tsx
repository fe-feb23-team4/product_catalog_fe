import cn from 'classnames';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import cl from './TabletsPage.module.scss';

export const TabletsPage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.breadscrumbs_wrapper}>
        <Breadscrumbs category="Tablets" />
      </div>

      <h1 className={cl.title}>Tablets</h1>
      <span className={cl.models_amount}>0 models</span>
      <div className={cl.no_products_message}>
        No available products yet
      </div>
      <div className={cl.animation_container}>
        <div className={cl.planet_container}>
          <div className={cl.planet_wrapper}>
            <div className={cl.nightbg} />
            <div className={cl.zzz1} />
            <div className={cl.zzz2} />
            <div className={cl.zzz3} />
            <div className={cl.planet}>
              <div className={cl.face}>
                <div className={cl.eye}>
                  <div className={cl.eye_in} />
                </div>
                <div className={cl.mouth} />
                <div className={cl.eye}>
                  <div className={cl.eye_in} />
                </div>
              </div>
            </div>
            <div className={cn(
              cl.star,
              cl.pos_star1,
            )}
            />
            <div className={cn(
              cl.star,
              cl.pos_star2,
            )}
            />
            <div className={cn(
              cl.star,
              cl.pos_star3,
            )}
            />
          </div>
        </div>
        <div className={cl.bounce} />
        <div className={cl.pebble1} />
        <div className={cl.cactus1} />
        <div className={cl.pebble2} />
        <div className={cl.cactus2} />
        <div className={cl.pebble3} />
      </div>
    </div>
  );
};
