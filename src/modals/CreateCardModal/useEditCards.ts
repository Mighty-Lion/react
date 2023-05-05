import { useEffect, useState } from 'react';
import { log } from 'util';
import { ICarsCardProps } from '@/pages/Home/partials/CarsCard';
import Bmw from '@/assets/images/bmw_e34.jpg';
import HondaS200 from '@/assets/images/honda_s2000.jpg';
import LamborghiniAventador from '@/assets/images/lamborghini_aventado.jpg';
import McLarenP1 from '@/assets/images/mclaren_p1.jpg';
import MercedesBenzSClassW222 from '@/assets/images/mercedesbenz_sclass_w222.jpg';
import OpelSpeedster from '@/assets/images/opel_speedster.jpg';
import Porsche911 from '@/assets/images/porsche_911.jpg';
import { ICarProps } from '@/pages/Home';

export const carsArray = [
  {
    id: '0BMW e341996',
    imgSrc: Bmw,
    name: 'BMW e34',
    year: '1996',
    country: 'Германия',
  },
  {
    id: '1Honda s20002009',
    imgSrc: HondaS200,
    name: 'Honda s2000',
    year: '2009',
    country: 'Япония',
  },
  {
    id: '2Lamborghini Aventador2020',
    imgSrc: LamborghiniAventador,
    name: 'Lamborghini Aventador',
    year: '2020',
    country: 'Италия',
  },
  {
    id: '3McLaren P12015',
    imgSrc: McLarenP1,
    name: 'McLaren P1',
    year: '2015',
    country: 'Великобритания',
  },
  {
    id: '4Mercedes-benz S-class w2222020',
    imgSrc: MercedesBenzSClassW222,
    name: 'Mercedes-benz S-class w222',
    year: '2020',
    country: 'Германия',
  },
  {
    id: '5Opel Speedster2005',
    imgSrc: OpelSpeedster,
    name: 'Opel Speedster',
    year: '2005',
    country: 'Великобритания',
  },
  {
    id: '6Porsche 9112000',
    imgSrc: Porsche911,
    name: 'Porsche 911',
    year: '2000',
    country: 'Германия',
  },
];

export function useEditCards() {
  const savedTheArray = localStorage.getItem('savedTheArray');
  const parsedTheArray = savedTheArray && JSON.parse(savedTheArray);

  const [theArray, setTheArray] = useState<ICarsCardProps[]>(
    parsedTheArray || []
  );
  const [selectedCard, setSelectedCard] = useState<ICarsCardProps | undefined>(
    undefined
  );

  function addCard(newValue: ICarsCardProps) {
    setTheArray((prev) => {
      const id = `${prev.length + newValue.name + newValue.year}`;

      return [...prev, { ...newValue, id }];
    });
  }

  function editCard(newValue: ICarsCardProps) {
    setTheArray((prev) => {
      const id = selectedCard?.id;

      return prev.map((item) => {
        return id === item.id ? { ...newValue, id } : item;
      });
    });
    setSelectedCard(undefined);
  }
  function redactCards(newValue: ICarsCardProps) {
    if (!selectedCard?.id) {
      addCard(newValue);
    } else {
      editCard(newValue);
    }
  }
  function removeCard(card: ICarsCardProps) {
    setTheArray((prev) => prev.filter((item) => item.id !== card.id));
  }

  useEffect(
    () => localStorage.setItem('savedTheArray', JSON.stringify(theArray)),
    [theArray]
  );

  return {
    theArray,
    setTheArray,
    selectedCard,
    setSelectedCard,
    removeCard,
    redactCards,
  };
}
