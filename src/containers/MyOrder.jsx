import React, { useContext, useState } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import flechita from '@images/flechita.svg';
import AppContext from '../context/AppContext';
import Checkout from '../pages/Checkout';
import { Link } from 'react-router-dom';
import Orders from '../pages/Orders';


const MyOrder = ({toggleOrders, setToggleOrders}) => {
  // const [toggle, setToggle] = useState(false);
  // const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div
        className="title-container"
      >
        <img src={flechita} alt="arrow" className="title-flecha"  onClick={() => setToggleOrders(!toggleOrders)} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItems-${product.id}`} />
        ))}
        <div className="order-shop">
          <p>
            <span>Total:</span>
          </p>
          <p>$ {sumTotal()}</p>
        </div>
        <Link to="/checkout">
          <button className="primary-button" 
          // onClick={() => setToggle(true)}
          >
            Checkout
          </button>
        </Link>
      </div>
      {/* {toggle && <Checkout setToggle={setToggle} />} */}
      
    </aside>
  );
};



export default MyOrder