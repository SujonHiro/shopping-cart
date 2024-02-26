import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
