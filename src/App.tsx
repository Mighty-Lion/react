import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Container } from './components/Container/index.styles';

export function App() {
  return (
    <Routes>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <div></div>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <Container>
        <App />
      </Container>
    </Router>
  );
}
