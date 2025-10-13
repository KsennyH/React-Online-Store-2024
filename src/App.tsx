import './scss/style.scss';
import {Outlet, Route, Routes,} from "react-router-dom";
import CartPage from './pages/cart/CartPage';
import React from 'react';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Layout from './layouts/Layout';
import SingleProductPage from './pages/catalog-page/single/SingleProductPage';
import CatalogPage from './pages/catalog-page/CatalogPage';
import HeaderTemplate from './components/header/HeaderTemplate';

export const SearchContext = React.createContext('');

function App() {  

  return (
    <div className="wrapper">
      <HeaderTemplate />
      <Outlet />
    </div>
  );
}

export default App;
