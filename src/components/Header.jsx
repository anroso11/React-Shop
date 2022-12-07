import React, {useContext} from 'react';
import '../styles/Header.scss';
import logo from '@images/logo_yard_sale.svg';
import IconMenu from '@images/icon_menu.svg';
import IconShopping from '@images/icon_shopping_cart.svg';
import Menu from '../components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';



const Header = () => {
  const [toggleDesktop, setToggleDesktop] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggleDesktop(!toggleDesktop);
  }
  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            pepitoperez@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={IconShopping} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleDesktop ? <Menu /> : ""}
      {/* {toggleOrders ? <MyOrder /> : ""} */}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </nav>
  );
}

export default Header