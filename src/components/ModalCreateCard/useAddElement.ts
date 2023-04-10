import { useState } from 'react';
import { IModalProps } from '@/modals/Modal';
import { ICarsCardProps } from '@/pages/Home/partials/CarsCard';
import { carsArray } from '@/pages/Home';
import Bmw from '@/assets/images/bmw_e34.jpg';
import HondaS200 from '@/assets/images/honda_s2000.jpg';
import LamborghiniAventador from '@/assets/images/lamborghini_aventado.jpg';
import McLarenP1 from '@/assets/images/mclaren_p1.jpg';
import MercedesBenzSClassW222 from '@/assets/images/mercedesbenz_sclass_w222.jpg';
import OpelSpeedster from '@/assets/images/opel_speedster.jpg';
import Porsche911 from '@/assets/images/porsche_911.jpg';

export interface IModalCreateCardProps extends IModalProps {
  newValue?: ICarsCardProps;
  addValue: (newValue: ICarsCardProps) => void;
}
export const carsArray = [
  {
    imgSrc: Bmw,
    name: 'BMW e34',
    year: '1996',
    country: 'Германия',
  },
  {
    imgSrc: HondaS200,
    name: 'Honda s2000',
    year: '2009',
    country: 'Япония',
  },
  {
    imgSrc: LamborghiniAventador,
    name: 'Lamborghini Aventador',
    year: '2020',
    country: 'Италия',
  },
  {
    imgSrc: McLarenP1,
    name: 'McLaren P1',
    year: '2015',
    country: 'Великобритания',
  },
  {
    imgSrc: MercedesBenzSClassW222,
    name: 'Mercedes-benz S-class w222',
    year: '2020',
    country: 'Германия',
  },
  {
    imgSrc: OpelSpeedster,
    name: 'Opel Speedster',
    year: '2005',
    country: 'Великобритания',
  },
  {
    imgSrc: Porsche911,
    name: 'Porsche 911',
    year: '2000',
    country: 'Германия',
  },
];

export function useAddElement() {
  const [theArray, setTheArray] = useState(carsArray);

  const addValue = (newValue: ICarsCardProps) => {
    console.log('addValue');
    setTheArray((prev) => [...prev, newValue]);
    console.log(theArray);
  };

  return { theArray, addValue };
}
