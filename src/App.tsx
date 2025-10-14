import './scss/style.scss';
import { Outlet } from "react-router-dom";
import React from 'react';
import HeaderTemplate from '@/components/header/HeaderTemplate';
import Footer from '@/components/footer/Footer';

export const SearchContext = React.createContext('');

function App() {  

  return (
    <div className="wrapper">
      <HeaderTemplate />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
