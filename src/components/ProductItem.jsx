import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import btAddCart from '@images/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';


const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext); 
  // poner el parámetro a iterar en este caso product que es el resultado de el hooks useGetProducts.js
  
  const handleClick = (item) => {
    addToCart(item);
  }

  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={btAddCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;