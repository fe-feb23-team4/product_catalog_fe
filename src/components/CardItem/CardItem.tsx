import cl from './CardItem.module.scss';
/* eslint-disable max-len */

const phone = {
  id: 'apple-iphone-11-64gb-red',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 64GB Red',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '64GB',
  priceRegular: 932,
  priceDiscount: 888,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'red',
  images: [
    'img/phones/apple-iphone-11/red/00.jpg',
    'img/phones/apple-iphone-11/red/01.jpg',
    'img/phones/apple-iphone-11/red/02.jpg',
    'img/phones/apple-iphone-11/red/03.jpg',
    'img/phones/apple-iphone-11/red/04.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

// eslint-disable-next-line no-console
console.log(phone.images[0]);

export const CardItem = () => {
  return (
    <div className={cl.cardItem}>
      <div className={cl.cardItem__img}>
        <img
          src={`/product_catalog_fe/${phone.images[0]}`}
          alt={phone.images[0].split('/')[2]}
        />
      </div>

      <h3 className={cl.cardItem__name}>{phone.name}</h3>

      <div className={cl.cardItem__price}>
        <ins className={cl.cardItem__priceDiscount}>
          {`$${phone.priceDiscount ? phone.priceDiscount : phone.priceRegular}`}
        </ins>

        <del className={cl.cardItem__priceRegular}>
          {phone.priceDiscount && `$${phone.priceRegular}`}
        </del>
      </div>

      <div className={cl.cardItem__params}>
        <div className={cl.cardItem__paramsName}>
          <p>Screen</p>
          <p>Capacity</p>
          <p>RAM</p>
        </div>

        <div className={cl.cardItem__paramsValue}>
          <p>{phone.screen}</p>
          <p>{`${phone.capacity.slice(0, -2)} ${phone.capacity.slice(-2)}`}</p>
          <p>{`${phone.ram.slice(0, -2)} ${phone.ram.slice(-2)}`}</p>
        </div>
      </div>
    </div>
  );
};
