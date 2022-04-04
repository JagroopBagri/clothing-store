import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import blueScarf from '../images/clothing/male/surreal-scarf-blue.png';
import redScarf from '../images/clothing/male/surreal-scarf-red.png';
import gucciShirt from '../images/clothing/male/gucci-shirt.png';
import izmirSandal from '../images/clothing/male/izmir-sandal-white.png';
import izmirSandalBlack from '../images/clothing/male/izmir-sandal.png';
import hoodie from '../images/clothing/male/sage-hoodie.png';
import shawl from '../images/clothing/male/dussa-shawl.png';
import belt from '../images/clothing/male/belt.png';
function Men() {
  let menClotheArray = [];
  menClotheArray.push(
    {
      title: 'Surreal Scarf - Blue',
      image: blueScarf,
      gender: 'male',
      price: '$800',
      description: 'Scarf in cashmere and silk (70% cashmere, 30% silk)',
      id: 'M0',
    },
    {
      title: 'Surreal Scarf - Red',
      image: redScarf,
      gender: 'male',
      price: '$800',
      description: 'Scarf in cashmere and silk (70% cashmere, 30% silk)',
      id: 'M1',
    },
    {
      title: 'Dussa Shawl',
      image: shawl,
      gender: 'male',
      price: '$1200',
      description: 'Premium blended wool shawl in deep blue color',
      id: 'M2',
    },
    {
      title: 'Izmir-Sandal - White',
      image: izmirSandal,
      gender: 'male',
      price: '$700',
      description:
        'Sandal in unique plant-based leather with "H" cut-out and raw-edged detail',
      id: 'M3',
    },
    {
      title: 'Izmir-Sandal - Black',
      image: izmirSandalBlack,
      gender: 'male',
      price: '$700',
      description:
        'Sandal in unique plant-based leather with "H" cut-out and raw-edged detail',
      id: 'M4',
    },
    {
      title: 'Stretch Belt',
      image: belt,
      gender: 'male',
      price: '$2080',
      description:
        'Belt buckle in brushed palladium plated metal. With its ingenuous mecanism, this buckle can fit 32 mm and 38 mm leatherstraps. ',
      id: 'M5',
    },
    {
      title: 'Essentials Hoodie',
      image: hoodie,
      gender: 'male',
      price: '$150',
      description:
        'The classic Essentials hoodie sweatshirt is updated with a flocked logo treatment inspired by vintage athletic wear.',
      id: 'M6',
    },
    {
      title: 'Silk Bowling Shirt',
      image: gucciShirt,
      gender: 'male',
      price: '$1900',
      description:
        'In a classic wide camp collar shape, this shirt boats a range of colors accompined with stunning designs. (100% silk)',
      id: 'M7',
    }
  );
  const [display, setDisplay] = useState({ display: 'none' });
  const toggleDisplay = () => {
    if (display === { display: 'none' }) {
      setDisplay({ display: 'block' });
    } else {
      setDisplay({ display: 'none' });
    }
  };
  const Clothe = menClotheArray.map((item) => {
    return (
      <Item
        display={display}
        image={item.image}
        title={item.title}
        price={item.price}
        description={item.description}
        key={item.id}
        func={toggleDisplay}
      ></Item>
    );
  });
  return (
    <div className="men--page">
      <Header></Header>
      <div className="men--container">
        <p>Men's</p>
      </div>
      <div className="item--preview--container">{Clothe}</div>
    </div>
  );
}

export default Men;
