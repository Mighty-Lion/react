import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';

// eslint-disable-next-line import/prefer-default-export
export function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarListLink to="/">Home</NavbarListLink>
        <NavbarListLink to="/NotFound">2</NavbarListLink>
        <NavbarListLink to="/">3</NavbarListLink>
        <NavbarListLink to="/">4</NavbarListLink>
        <NavbarListLink to="/">5</NavbarListLink>
      </NavbarList>
    </NavbarWrapper>
  );
}
