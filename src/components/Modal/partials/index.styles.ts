import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  z-index: 9999;
  padding: 20px;
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 5px;
`;
