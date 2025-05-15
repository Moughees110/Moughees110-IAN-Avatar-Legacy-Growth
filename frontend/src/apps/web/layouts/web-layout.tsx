

import { Outlet } from 'react-router-dom';
import Navbar from '../pages/navbar';

const WebLayout = () => {
  return (
    <div>

     <Navbar/>
      <Outlet />
    </div>
  );
};

export default WebLayout;
