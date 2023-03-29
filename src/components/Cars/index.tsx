import {
  CarsCard,
  CarsCardImg,
  CarsCardImgWrapper,
  CarsCardTextWrapper,
  CarsWrapper,
  Text,
  TextBold,
} from './index.styles';

import bmw from '../../assets/bmw_e34.jpg';

const carsArray = [
  {
    imgSrc: '/src/assets/bmw_e34.jpg',
    name: 'BMW e34',
    year: '1996',
    country: 'Германия',
  },
  {
    imgSrc: '/src/assets/honda_s2000.jpg',
    name: 'Honda s2000',
    year: '2009 ',
    country: 'Япония',
  },
  {
    imgSrc: '/src/assets/lamborghini_aventado.jpg',
    name: 'Lamborghini Aventador',
    year: '2020',
    country: 'Италия',
  },
  {
    imgSrc: '/src/assets/mclaren_p1.jpg',
    name: 'McLaren P1',
    year: '2015',
    country: 'Великобритания',
  },
  {
    imgSrc: '/src/assets/mercedesbenz_sclass_w222.jpg',
    name: 'Mercedes-benz S-class w222',
    year: '2020',
    country: 'Германия',
  },
  {
    imgSrc: '/src/assets/opel_speedster.jpg',
    name: 'Opel Speedster',
    year: '2005',
    country: 'Великобритания',
  },
  {
    imgSrc: '/src/assets/porsche_911.jpg',
    name: 'Porsche 911',
    year: '2000',
    country: 'Германия',
  },
];

function RenderCarsItem() {
  const renderCarsItem = carsArray.map((item) => (
    <CarsCardContainer
      imgSrc={item.imgSrc}
      name={item.name}
      year={item.year}
      country={item.country}
    />
  ));

  return renderCarsItem;
}
export function Cars() {
  return (
    <CarsWrapper>
      <RenderCarsItem />
    </CarsWrapper>
  );
}

export function CarsCardContainer(props: {
  imgSrc: string;
  name: string;
  year: string;
  country: string;
}) {
  return (
    <CarsCard>
      <CarsCardImgWrapper>
        <CarsCardImg src={props.imgSrc} />
      </CarsCardImgWrapper>
      <CarsCardTextWrapper>
        <Text>{props.name}</Text>
        <Text>
          Год выпуска: <TextBold>{props.year}</TextBold>
        </Text>
        <Text>
          Страна: <TextBold>{props.country}</TextBold>
        </Text>
      </CarsCardTextWrapper>
    </CarsCard>
  );
}
