import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import zodiacShawl from '../images/clothing/female/zodiac-shawl.png';
import tropicalShawl from '../images/clothing/female/tropical-shawl.png';
import gardenShawl from '../images/clothing/female/tropical-shawl2.png';
import amoreSandal from '../images/clothing/female/amore-sandal.png';
import santoriniSandal from '../images/clothing/female/santorini-sandal.png';
import zipup from '../images/clothing/female/half-zipup.png';
import cardigan from '../images/clothing/female/sage-cardigan.png';
function Women() {
  let womenClotheArray = [];
  womenClotheArray.push(
    {
      title: 'Embroidered Zodiac Shawl',
      image: zodiacShawl,
      gender: 'female',
      price: '$5500',
      description:
        'Shawl in cashmere and silk with hand-rolled edges and hand-embroidered with fine beads and multicolor glass rods (70% cashmere, 30% silk).',
      id: 'F0',
    },
    {
      title: 'Tropical Shawl - Rose',
      image: tropicalShawl,
      gender: 'female',
      price: '$1200',
      description:
        'Shawl in cashmere and silk with hand-rolled edges (70% cashmere, 30% silk).',
      id: 'F1',
    },
    {
      title: 'Tropical Shawl - Garden',
      image: gardenShawl,
      gender: 'female',
      price: '$1200',
      description:
        'Shawl in cashmere and silk with hand-rolled edges (70% cashmere, 30% silk).',
      id: 'F2',
    },
    {
      title: 'Amore - Sandal',
      image: amoreSandal,
      gender: 'female',
      price: '$630',
      description:
        'Sandal in unique plant-based leather with straight cut edges.',
      id: 'F3',
    },
    {
      title: 'Santorini - Sandal',
      image: santoriniSandal,
      gender: 'female',
      price: '$1525',
      description:
        'Sandal in unique plant-based leather with straight cut edges.',
      id: 'F4',
    },
    {
      title: '1/2 Zip Pullover',
      image: zipup,
      gender: 'female',
      price: '$150',
      description:
        'The 1/2 zip pullover is designed in the signature Essentials fleece to provide depth and comfort.',
      id: 'F5',
    },
    {
      title: 'Cardigan',
      image: cardigan,
      gender: 'female',
      price: '$165',
      description:
        'The full-zip cardigan is elevated in a sweater knit to provide appealing softness, body, and texture.',
      id: 'F6',
    }
  );
  console.log(womenClotheArray);
  return (
    <div className="women--page">
      <Header></Header>
      <div className="women--container">
        <p>Women's</p>
      </div>
      <Item></Item>
    </div>
  );
}

export default Women;
