import styled from '@emotion/styled';
import {Link, NavLink} from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: gray;
  z-index: 100;
`;

export const NavbarList = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 0;
`;

export const NavbarListLink = styled(Link)`
  font-size: 1rem;
`;
