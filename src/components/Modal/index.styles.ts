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

export const ModalContainer = styled.div`
  position: relative;
  z-index: 9999;
  padding: 20px;
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 5px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
