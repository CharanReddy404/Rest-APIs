import { useEffect, useState } from 'react';

const Test = () => {
  const data = [
    {
      name: 'Ten Dollar',
      numericValue: 1000,
      code: 'USD_TEN_DOLLAR',
    },
    {
      name: 'Fifty Dollar',
      numericValue: 5000,
      code: 'USD_FIFTY_DOLLAR',
    },
    {
      name: 'Hundred Dollar',
      numericValue: 10000,
      code: 'USD_HUNDRED_DOLLAR',
    },
  ];

  const [state, setState] = useState(null);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setState(
      data.map((v) => {
        return { ...v, count: 0 };
      })
    );
  }, []);

  const handleDollarChange = (e) => {
    setState(() => {
      return state.map((v) => {
        if (v.code === e.target.name) {
          v.count = Number(e.target.value);
        }
        return v;
      });
    });
  };

  const calculateTotalValue = () => {
    const totalValue = state.reduce((c, v) => {
      return c + v.numericValue * v.count;
    }, 0);

    setTotal(totalValue);
  };

  if (!state) return null;

  return (
    <div className='bg-white p-2'>
      {state.map((v, i) => (
        <div key={i}>
          <label>{v.name} </label>
          <input
            className='ml-2 mb-2 border'
            type='number'
            min={0}
            name={v.code}
            value={v.count === 0 ? '' : v.count}
            onChange={handleDollarChange}
          />
          <br />
        </div>
      ))}
      <button
        className='bg-red-600 mb-2 p-1 text-white rounded-lg'
        onClick={calculateTotalValue}
      >
        Calculate Total Value
      </button>
      <p>Total Value: ${total / 100}</p>
    </div>
  );
};

export default Test;
