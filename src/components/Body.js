import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const Body = () => {
  return (
    <div className='pt-20 md:mx-20 lg:mx-28 h-full'>
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Body;
