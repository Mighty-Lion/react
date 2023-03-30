import { CarsWrapper } from './index.styles';
import { Car } from './partials/CarsCard';
import Bmw from '@/assets/images/bmw_e34.jpg';
import HondaS200 from '@/assets/images/honda_s2000.jpg';
import LamborghiniAventador from '@/assets/images/lamborghini_aventado.jpg';
import McLarenP1 from '@/assets/images/mclaren_p1.jpg';
import MercedesBenzSClassW222 from '@/assets/images/mercedesbenz_sclass_w222.jpg';
import OpelSpeedster from '@/assets/images/opel_speedster.jpg';
import Porsche911 from '@/assets/images/porsche_911.jpg';

const carsArray = [
  {
    id: '1',
    imgSrc: Bmw,
    name: 'BMW e34',
    year: '1996',
    country: 'Германия',
  },
  {
    id: '2',
    imgSrc: HondaS200,
    name: 'Honda s2000',
    year: '2009',
    country: 'Япония',
  },
  {
    id: '3',
    imgSrc: LamborghiniAventador,
    name: 'Lamborghini Aventador',
    year: '2020',
    country: 'Италия',
  },
  {
    id: '4',
    imgSrc: McLarenP1,
    name: 'McLaren P1',
    year: '2015',
    country: 'Великобритания',
  },
  {
    id: '5',
    imgSrc: MercedesBenzSClassW222,
    name: 'Mercedes-benz S-class w222',
    year: '2020',
    country: 'Германия',
  },
  {
    id: '6',
    imgSrc: OpelSpeedster,
    name: 'Opel Speedster',
    year: '2005',
    country: 'Великобритания',
  },
  {
    id: '7',
    imgSrc: Porsche911,
    name: 'Porsche 911',
    year: '2000',
    country: 'Германия',
  },
];

const renderedCarItems = carsArray.map((item) => (
  <Car
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
