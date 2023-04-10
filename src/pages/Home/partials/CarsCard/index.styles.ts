import styled from '@emotion/styled';

export const CarsCard = styled.div`
  display: block;
  padding: 10px;
  width: 100%;
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
