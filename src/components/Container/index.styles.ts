import styled from '@emotion/styled';
import { getBreakpoint } from '../../Breakpoinst';

export const Container = styled.section`
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding: 0 20px;

  @media (max-width: ${getBreakpoint('TABLET_M', 'down')}) {
    padding: 0 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding: 0 5px;
  }
`;
