import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EditProduct = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    brand: '',
  });

  const updateInput = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const getProduct = async () => {
    const data = await fetch(
      'https://dummyjson.com/products/' + searchParams.get('p')
    ).then((res) => res.json());

    const { title, description, price, stock, brand } = data;
    setProductData({ title, description, price, stock, brand });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    const res = await fetch(
      'https://dummyjson.com/products/' + searchParams.get('p'),
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      }
    );
    if (res.status === 200) {
      navigate('/');
    }
  };

  if (!productData) return null;

  return (
    <div className='mx-5 md:mx-10 mt-10 p-5 bg-white'>
      <h1 className='text-2xl font-bold'>Edit Product</h1>
      <form
        onSubmit={(e) => updateProduct(e)}
        className='pt-5 text-lg font-semibold '
      >
        <div className='grid md:grid-cols-2'>
          {Object.keys(productData).map((v, i) => (
            <div key={i} className='pt-5'>
              <label>{v} :- </label>
              <input
                className='border-2'
                name={v}
                type='text'
                value={productData[v]}
                onChange={(e) => updateInput(e)}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='mt-5 p-2 rounded-lg bg-green-600 text-white'
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
