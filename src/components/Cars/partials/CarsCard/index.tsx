import {
  CarsCard,
  CarsCardImg,
  CarsCardImgWrapper,
  CarsCardTextWrapper,
} from './index.styles';
import { Text, TextBold } from '../../../Text/index.styles';

interface ICarsCardProps {
  id: string;
  imgSrc: string;
  name: string;
  year: string;
  country: string;
}
export function CarsCardContainer({
  id,
  imgSrc,
  name,
  year,
  country,
}: ICarsCardProps) {
  return (
    <CarsCard key={id}>
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
    </CarsCard>
  );
}
