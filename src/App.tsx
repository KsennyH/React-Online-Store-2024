import './scss/style.scss';
import {Route, Routes,} from "react-router-dom";
import CartPage from './pages/cart/CartPage';
import React from 'react';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Layout from './layouts/Layout';
import SingleProductPage from './pages/catalog/single/SingleProductPage';
import CatalogPage from './pages/catalog/CatalogPage';

export const SearchContext = React.createContext('');

function App() {  

  return (
    <div className="wrapper">
        <Layout>
          <Routes>
            <Route path='/' element={<CatalogPage />}/>
            <Route path='/products/:id' element={<SingleProductPage />}/>
            <Route path='/services' element={<ServicesPage />}/>
            <Route path='/contacts' element={<ContactPage />}/>
            <Route path='/cart' element={<CartPage />}/>
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
