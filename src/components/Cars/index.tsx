import { CarsWrapper } from './index.styles';
import { CarsCardContainer } from './partials/CarsCard';

const carsArray = [
  {
    id: '1',
    imgSrc: '/src/assets/bmw_e34.jpg',
    name: 'BMW e34',
    year: '1996',
    country: 'Германия',
  },
  {
    id: '2',
    imgSrc: '/src/assets/honda_s2000.jpg',
    name: 'Honda s2000',
    year: '2009',
    country: 'Япония',
  },
  {
    id: '3',
    imgSrc: '/src/assets/lamborghini_aventado.jpg',
    name: 'Lamborghini Aventador',
    year: '2020',
    country: 'Италия',
  },
  {
    id: '4',
    imgSrc: '/src/assets/mclaren_p1.jpg',
    name: 'McLaren P1',
    year: '2015',
    country: 'Великобритания',
  },
  {
    id: '5',
    imgSrc: '/src/assets/mercedesbenz_sclass_w222.jpg',
    name: 'Mercedes-benz S-class w222',
    year: '2020',
    country: 'Германия',
  },
  {
    id: '6',
    imgSrc: '/src/assets/opel_speedster.jpg',
    name: 'Opel Speedster',
    year: '2005',
    country: 'Великобритания',
  },
  {
    id: '7',
    imgSrc: '/src/assets/porsche_911.jpg',
    name: 'Porsche 911',
    year: '2000',
    country: 'Германия',
  },
];

const renderedCarItems = carsArray.map((item) => (
  <CarsCardContainer
    key={item.id}
    id={item.id}
    imgSrc={item.imgSrc}
    name={item.name}
    year={item.year}
    country={item.country}
  />
));

export function Cars() {
  return <CarsWrapper>{renderedCarItems}</CarsWrapper>;
}
