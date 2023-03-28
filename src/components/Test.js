import { useState } from 'react';

const Test = () => {
  const data = [
    {
      name: 'Ten Dollar',
      numericValue: 1000,
      code: 'USD_TEN_DOLLAR',
    },
    {
      name: 'Hundred Dollar',
      numericValue: 10000,
      code: 'USD_HUNDRED_DOLLAR',
    },
  ];

  const [state, setState] = useState({
    numTenDollar: 0,
    numHundredDollar: 0,
    totalValue: 0,
  });

  const handleNumTenDollarChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setState((prevState) => ({ ...prevState, numTenDollar: value }));
  };

  const handleNumHundredDollarChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setState((prevState) => ({ ...prevState, numHundredDollar: value }));
  };

  const calculateTotalValue = () => {
    const total =
      state.numTenDollar * data[0].numericValue +
      state.numHundredDollar * data[1].numericValue;
    setState((prevState) => ({ ...prevState, totalValue: total }));
  };

  return (
    <div className='bg-white p-2'>
      <label>Number of Ten Dollar Bills: </label>
      <input
        className='ml-2 mb-2 border'
        type='number'
        value={state.numTenDollar}
        onChange={handleNumTenDollarChange}
      />
      <br />
      <label>Number of Hundred Dollar Bills:</label>
      <input
        className='ml-2 mb-2 border'
        type='number'
        value={state.numHundredDollar}
        onChange={handleNumHundredDollarChange}
      />
      <br />
      <button
        className='bg-red-600 mb-2 p-1 text-white rounded-lg'
        onClick={calculateTotalValue}
      >
        Calculate Total Value
      </button>
      <p>Total Value: ${state.totalValue / 100}</p>
    </div>
  );
};

export default Test;
