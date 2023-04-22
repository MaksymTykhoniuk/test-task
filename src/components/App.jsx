import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
// const ProductDetails = lazy(() => import('../pages/ProductsDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/tweets" element={<Tweets />}></Route>
        {/* <Route path="/tweets/:id" element={<ProductDetails />}></Route> */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
