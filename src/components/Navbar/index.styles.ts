import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 40px;
  width: 100%;
  background: gray;
`;

export const NavbarList = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`;

export const NavbarListLink = styled(Link)`
  font-size: 1rem;
`;
