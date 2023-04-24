import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
