import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  height: 100%;
  width: 100%;

  @media (max-width: ${getBreakpoint('TABLET_L', 'down')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  @media (max-width: ${getBreakpoint('TABLET_S', 'down')}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
