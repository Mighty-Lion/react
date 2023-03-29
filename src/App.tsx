import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
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
