import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

import ListAllProducts from './components/productPages/ListAllProducts';
import CreateProduct from './components/productPages/CreateProduct';
import EditProduct from './components/productPages/EditProduct';
import store from './utils/store';
import ViewProduct from './components/productPages/ViewProduct';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <ListAllProducts />,
      },
      {
        path: '/createProduct',
        element: <CreateProduct />,
      },
      {
        path: '/editProduct',
        element: <EditProduct />,
      },
      {
        path: '/allProducts',
        element: <ListAllProducts />,
      },
      {
        path: '/viewProduct',
        element: <ViewProduct />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className='flex'>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
