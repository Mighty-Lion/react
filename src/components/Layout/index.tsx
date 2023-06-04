import { PropsWithChildren, useState } from 'react';
import { ToastContainer } from 'react-toastify';
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
