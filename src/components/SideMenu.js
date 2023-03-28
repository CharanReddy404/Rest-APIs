import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleMenu } from '../utils/appSlice';

const SideMenu = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  if (!isMenuOpen) return null;

  return (
    <div className='fixed z-40 w-52 h-screen bg-[#7132e2] text-white text-xl shadow-md overflow-y-auto '>
      <ul className='p-5'>
        <li className='py-2'>
          <Link to='/createProduct' onClick={() => toggleMenuHandler()}>
            Create Product
          </Link>
        </li>
        <li className='py-2'>
          <Link to='/allProducts' onClick={() => toggleMenuHandler()}>
            List All Products
          </Link>
        </li>
        <li className='py-2'>
          <Link to='/test' onClick={() => toggleMenuHandler()}>
            Test
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
