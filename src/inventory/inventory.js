import zodiacShawl from '../images/clothing/female/zodiac-shawl.png';
import tropicalShawl from '../images/clothing/female/tropical-shawl.png';
import gardenShawl from '../images/clothing/female/tropical-shawl2.png';
import amoreSandal from '../images/clothing/female/amore-sandal.png';
import santoriniSandal from '../images/clothing/female/santorini-sandal.png';
import zipup from '../images/clothing/female/half-zipup.png';
import cardigan from '../images/clothing/female/sage-cardigan.png';
import womenBelt from '../images/clothing/female/anneaux-belt.png';
import blueScarf from '../images/clothing/male/surreal-scarf-blue.png';
import redScarf from '../images/clothing/male/surreal-scarf-red.png';
import gucciShirt from '../images/clothing/male/gucci-shirt.png';
import izmirSandal from '../images/clothing/male/izmir-sandal-white.png';
import izmirSandalBlack from '../images/clothing/male/izmir-sandal.png';
import hoodie from '../images/clothing/male/sage-hoodie.png';
import shawl from '../images/clothing/male/dussa-shawl.png';
import belt from '../images/clothing/male/belt.png';

let womenClotheArray = [];
womenClotheArray.push(
  {
    title: 'Zodiac Shawl',
    image: zodiacShawl,
    gender: 'female',
    price: 5500,
    description:
      'Hand-embroidered with fine beads and multicolor glass rods (70% cashmere, 30% silk)',
    id: 'F0',
  },
  {
    title: 'Tropical Shawl - Rose',
    image: tropicalShawl,
    gender: 'female',
    price: 1200,
    description:
      'Shawl in cashmere and silk with hand-rolled edges (70% cashmere, 30% silk)',
    id: 'F1',
  },
  {
    title: 'Tropical Shawl - Garden',
    image: gardenShawl,
    gender: 'female',
    price: 1200,
    description:
      'Shawl in cashmere and silk with hand-rolled edges (70% cashmere, 30% silk)',
    id: 'F2',
  },
  {
    title: 'Amore - Sandal',
    image: amoreSandal,
    gender: 'female',
    price: 630,
    description: 'Sandal in unique plant-based leather with straight cut edges',
    id: 'F3',
  },
  {
    title: 'Santorini - Sandal',
    image: santoriniSandal,
    gender: 'female',
    price: 1525,
    description: 'Sandal in unique plant-based leather with rounded edges',
    id: 'F4',
  },
  {
    title: 'Anneaux Belt',
    image: womenBelt,
    gender: 'female',
    price: 2875,
    description: 'Plant-based belt in with gold plated buckle and rings ',
    id: 'F5',
  },
  {
    title: '1/2 Zip Pullover',
    image: zipup,
    gender: 'female',
    price: 150,
    description:
      'The 1/2 zip pullover is designed in the signature Essentials fleece to provide depth and comfort',
    id: 'F6',
  },
  {
    title: 'Cardigan',
    image: cardigan,
    gender: 'female',
    price: 165,
    description:
      'The full-zip cardigan is elevated in a sweater knit to provide appealing softness, body, and texture',
    id: 'F7',
  }
);

let menClotheArray = [];
menClotheArray.push(
  {
    title: 'Surreal Scarf - Blue',
    image: blueScarf,
    gender: 'male',
    price: 800,
    description: 'Scarf in cashmere and silk (70% cashmere, 30% silk)',
    id: 'M0',
  },
  {
    title: 'Surreal Scarf - Red',
    image: redScarf,
    gender: 'male',
    price: 800,
    description: 'Scarf in cashmere and silk (70% cashmere, 30% silk)',
    id: 'M1',
  },
  {
    title: 'Dussa Shawl',
    image: shawl,
    gender: 'male',
    price: 1200,
    description: 'Premium blended wool shawl in deep blue color',
    id: 'M2',
  },
  {
    title: 'Izmir-Sandal - White',
    image: izmirSandal,
    gender: 'male',
    price: 700,
    description:
      'Sandal in unique plant-based leather with "H" cut-out and raw-edged detail',
    id: 'M3',
  },
  {
    title: 'Izmir-Sandal - Black',
    image: izmirSandalBlack,
    gender: 'male',
    price: 700,
    description:
      'Sandal in unique plant-based leather with "H" cut-out and raw-edged detail',
    id: 'M4',
  },
  {
    title: 'Stretch Belt',
    image: belt,
    gender: 'male',
    price: 2080,
    description: 'Belt buckle in brushed palladium plated metal',
    id: 'M5',
  },
  {
    title: 'Essentials Hoodie',
    image: hoodie,
    gender: 'male',
    price: 150,
    description: 'Premium hoodie in 100% organic cotton',
    id: 'M6',
  },
  {
    title: 'Silk Bowling Shirt',
    image: gucciShirt,
    gender: 'male',
    price: 1900,
    description:
      'This shirt boats a range of colors accompanied with stunning designs (100% silk)',
    id: 'M7',
  }
);

export { womenClotheArray, menClotheArray };
