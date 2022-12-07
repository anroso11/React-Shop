import React, {useState} from "react";
import Orders from "../pages/Orders";
import '../styles/Menu.scss';
import { Link } from "react-router-dom";


const Menu = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/checkout" className="title" 
          // onClick={()=> setToggleOrders(true)} 
          >
              My orders
          </Link>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
      <div>
        {toggleOrders && <Orders setToggleOrders={setToggleOrders} />}
      </div>
    </div>
  );
};

export default Menu;
