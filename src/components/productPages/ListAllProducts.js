import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ListAllProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await fetch('https://dummyjson.com/products').then((res) =>
      res.json()
    );
    setProducts(data.products);
  };

  useState(() => {
    getProducts();
  }, []);

  if (products.length < 1) {
    return (
      <div className='flex flex-wrap justify-evenly'>
        {Array(30)
          .fill('')
          .map((v, i) => (
            <div
              key={i}
              className='m-2 w-72 p-2 shadow-lg  bg-white rounded-lg'
            >
              <div className='bg-gray-300 rounded-lg h-40 w-[100%]'></div>
              <div className='p-2 my-2 bg-gray-300 h-5'></div>
              <div className='p-2 my-2 bg-gray-300 h-5'></div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-evenly'>
      {products.map((product) => {
        return (
          <Link to={'/viewProduct?p=' + product.id} key={product.id}>
            <ProductCard product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default ListAllProducts;
