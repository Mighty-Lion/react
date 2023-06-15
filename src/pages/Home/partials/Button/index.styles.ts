import styled from '@emotion/styled';

export const AddButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 4em;
  height: 4em;
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
