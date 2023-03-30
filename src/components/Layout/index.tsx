import { PropsWithChildren } from 'react';
import { Navbar } from '../Navbar';
import { ContentWrapper } from './index.styles';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>
        <ContentWrapper as="main">{children}</ContentWrapper>
      </main>
    </>
  );
}
