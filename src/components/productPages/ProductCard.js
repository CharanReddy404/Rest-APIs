const ProductCard = ({ product }) => {
  const { thumbnail, title, description, price } = product;

  return (
    <div className='m-2 w-72 p-2 shadow-lg bg-white rounded-lg'>
      <img className='rounded-lg h-40 w-[100%]' alt={title} src={thumbnail} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>
          {description.length > 60
            ? description.slice(0, 60) + '...'
            : description}
        </li>
        <li className='font-semibold'>₹ {price}</li>
      </ul>
    </div>
  );
};

export default ProductCard;
