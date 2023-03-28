import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Container } from './components/Container/index.styles';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export function WrappedApp() {
  return (
    <>
      <Navbar />
      <Container

      >
        <App />
      </Container>
    </>
  );
}
