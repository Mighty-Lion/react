import styled from '@emotion/styled';

export const AddButton = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: 3em;
  height: 3em;
  background: lightcyan;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background: #70dafb;
  }

  &:active {
    background: #8788fb;
  }
`;

export const AddButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;
