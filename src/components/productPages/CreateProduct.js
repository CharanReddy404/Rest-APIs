import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
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

  const createProduct = async (e) => {
    e.preventDefault();
    const res = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    if (res.status === 200) {
      navigate('/');
    }
  };

  if (!productData) return null;

  return (
    <div className='mx-5 md:mx-10 mt-10 p-5 bg-white'>
      <h1 className='text-2xl font-bold'>Create Product</h1>
      <form
        onSubmit={(e) => createProduct(e)}
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
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
