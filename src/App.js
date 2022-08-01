import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';


function HatsPage() {
  return <h1>hats</h1>
}


function App() {
  return (
    <>

   
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/> } />
          <Route path='/hats' element={<HatsPage/> } />
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;
