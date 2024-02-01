import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PricingPlan1 from './PricingPlan1';
const routerConainer = [{ path: '/', element: <PricingPlan1 /> }];
const NormalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConainer.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default NormalRoutes;
