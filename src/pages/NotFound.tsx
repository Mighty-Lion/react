import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NotFoundButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 30px;
  width: 100%;
  max-width: 100px;
  border-radius: 5px;
  background: #646cff;
  color: white;

  &:hover {
    background: #9a9ff9;
    color: #e6e5f2;
  }
`;
function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <NotFoundButton to="/">Go Home</NotFoundButton>
    </>
  );
}

export default NotFound;
