import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';
import NotFound from '../../pages/NotFound';

// eslint-disable-next-line import/prefer-default-export
export function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarListLink to="/">1</NavbarListLink>
        <NavbarListLink to="/NotFound">2</NavbarListLink>
        <NavbarListLink to="/">3</NavbarListLink>
        <NavbarListLink to="/">4</NavbarListLink>
        <NavbarListLink to="/">5</NavbarListLink>
      </NavbarList>
    </NavbarWrapper>
  );
}
