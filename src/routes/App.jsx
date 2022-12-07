import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import CreateLogin from '../pages/CreateLogin';
import Layout from '../containers/Layout';
import RecoveryPassword from '../pages/RecoveryPassword';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import '../styles/global.css';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import SendEmail from '../pages/SendEmail';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
                <Route exact path="/" element= {<Home />} />
                <Route exact path="login" element= {<Login/>} />
                <Route exact path="/password-recovery" element= {<RecoveryPassword />} />
                <Route exact path="/send-email" element= {<SendEmail/>}/>
                <Route exact path="/new-password" element= {<NewPassword />}/>
                <Route exact path="/account" element= {<MyAccount />}/>
                <Route exact path="/signup" element= {<CreateLogin />} />
                <Route exact path="/checkout" element= {<Checkout />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route path="*" element= {<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>  
  );
}

export default App