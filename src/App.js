import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndSignUpPAge from './pages/sign-in -and-sign-up/sign-in -and-sign-up';


function App() {
  return (
    <>

   
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route exact path='/' element={<Homepage/> } />
          <Route path='/shop' element={<ShopPage/> } />
          <Route path='/signin' element={<SignInAndSignUpPAge/> } />
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;
