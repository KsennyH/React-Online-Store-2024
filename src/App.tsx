import './scss/style.scss';
import {Route, Routes,} from "react-router-dom";
import Header from './components/header/header';
import CatalogPage from './pages/catalogPage';
import CartPage from './pages/cartPage';
import SingleProduct from './pages/singleProduct';
import { useState } from 'react';
import React from 'react';

export const SearchContext = React.createContext('');

function App() {

  const [searchValue, setSearchValue] = useState('');    

  return (
    <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<CatalogPage />}/>
          <Route path='/products/:id' element={<SingleProduct />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
    </div>
  );
}

export default App;
