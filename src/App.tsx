import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';
import Layout from './components/Layout';
import Posts from "@/pages/Posts";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Layout>
      <App />
    </Layout>
  );
}
