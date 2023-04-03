import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
import Layout from './components/Layout';
import { ModalState } from '@/context/ModalContext';

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
    <ModalState>
      <Layout>
        <App />
      </Layout>
    </ModalState>
  );
}
