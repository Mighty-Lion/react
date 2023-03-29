import styled from '@emotion/styled';
import { getBreakpoint } from '../../Breakpoinst';

export const CarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: ${getBreakpoint('TABLET_L', 'down')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  @media (max-width: ${getBreakpoint('TABLET_S', 'down')}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarsCard = styled.div`
  display: block;
  padding: 10px;
  width: 100%;
  //max-width: 350px;
  border-radius: 5px;
  background: #bad1fd;
`;

export const CarsCardImgWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const CarsCardImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const CarsCardTextWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export const TextBold = styled(Text)`
  font-weight: 700;
`;
