
import { Routes, Route } from 'react-router-dom';
import WebLayout from '../layouts/web-layout';
import Home from '../pages/home';



const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;
