
import { Routes, Route } from 'react-router-dom';
import WebLayout from '../layouts/web-layout';
import Home from '../pages/home';
import About from '../pages/about';



const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
};

export default WebRoutes;
