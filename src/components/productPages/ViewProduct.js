import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const ViewProduct = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const getProduct = async () => {
    const data = await fetch(
      'https://dummyjson.com/products/' + searchParams.get('p')
    ).then((res) => res.json());
    setProduct(data);
  };

  const deleteProduct = async () => {
    const data = await fetch('https://dummyjson.com/products/1', {
      method: 'DELETE',
    }).then((res) => res.json());

    if (data.isDeleted) return navigate('/');
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) return null;

  return (
    <div className='mx-5 md:mx-10 mt-10 p-5 rounded-lg bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <img
          className='rounded-lg'
          src={product.thumbnail}
          alt={product.title}
        />
        <div className='p-2'>
          <ul>
            <li className='text-2xl font-bold'>{product.title}</li>
            <li className='md:text-xl'>{product.description}</li>
            <li className='pt-2'>
              <span className='font-bold p-1 px-2 rounded text-white bg-green-600'>
                {product.rating}☆
              </span>
            </li>
            <li className='pt-2 text-2xl font-bold'>₹{product.price}</li>
            <li className='text-red-400'>Hurry, Only {product.stock} left!</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap pt-5 justify-evenly'>
        <Link
          to={'/editProduct?p=' + searchParams.get('p')}
          className='rounded-lg text-white bg-blue-700 p-2'
        >
          Edit Product
        </Link>
        <button
          onClick={() => {
            deleteProduct();
          }}
          className='rounded-lg text-white bg-red-600 p-2'
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
