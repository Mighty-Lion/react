import styled from '@emotion/styled';

interface IValidStylesProps {
  isValid: boolean;
}
export const CreateCardForm = styled.form`
  position: relative;
  display: grid;
  grid-gap: 7px;
`;

export const CreateCardLabel = styled.label`
  color: #646cff;
`;

export const CreateCardFieldWrapper = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`;

export const CreateCardField = styled.input<IValidStylesProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 100%;
  border: 1px solid ${({ isValid }) => (isValid ? 'green' : 'red')};
  border-radius: 3px;
`;

export const CreateCardErrorMessage = styled.div`
  position: relative;
  top: 25px;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1rem;
  color: red;
`;

export const CreateCardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: none;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  background: lightblue;
  color: white;

  &:hover {
    background: #9a9ff9;
    color: #e6e5f2;
  }

  &:active {
    background: #646cff;
    color: white;
  }
`;
