import {
  CarsCard,
  CarsCardButton,
  CarsCardButtonWrapper,
  CarsCardImg,
  CarsCardImgWrapper,
  CarsCardTextWrapper,
} from './index.styles';
import { Text, TextBold } from '@/components/Text/index.styles';
import deleteSvg from '@/assets/images/delete.svg';
import editSvg from '@/assets/images/edit.svg';
import { ICarProps } from '@/pages/Home';

export interface ICarsCardProps {
  id?: string;
  imgSrc: string;
  name: string;
  year: string;
  country: string;
}

export function Car({ imgSrc, name, year, country, onEdit }: ICarProps) {
  return (
    <CarsCard>
      <CarsCardImgWrapper>
        <CarsCardImg src={imgSrc} />
      </CarsCardImgWrapper>
      <CarsCardTextWrapper>
        <Text>{name}</Text>
        <Text>
          Год выпуска: <TextBold>{year}</TextBold>
        </Text>
        <Text>
          Страна: <TextBold>{country}</TextBold>
        </Text>
      </CarsCardTextWrapper>
      <CarsCardButtonWrapper>
        <CarsCardButton onClick={onEdit}>
          <img src={editSvg} alt="edit btn" />
        </CarsCardButton>
        <CarsCardButton>
          <img src={deleteSvg} alt="delete btn" />
        </CarsCardButton>
      </CarsCardButtonWrapper>
    </CarsCard>
  );
}
