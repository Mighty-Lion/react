import { Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ContentWrapper } from './components/Container/index.styles';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <App />
      </ContentWrapper>
    </>
  );
}
