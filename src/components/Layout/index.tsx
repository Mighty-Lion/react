import { PropsWithChildren, useState } from 'react';
import { Navbar } from '../Navbar';
import { ContentWrapper, Wrapper } from './index.styles';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper as="main">{children}</ContentWrapper>
    </Wrapper>
  );
}
