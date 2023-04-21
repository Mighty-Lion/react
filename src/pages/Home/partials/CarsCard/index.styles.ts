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

export const CarsCardButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding-top: 10px;
`;

export const CarsCardButton = styled.button`
  height: 3em;
  background: lightcyan;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background: #70dafb;
  }

  &:active {
    background: #8788fb;
  }
`;
