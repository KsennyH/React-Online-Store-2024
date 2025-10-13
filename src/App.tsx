import './scss/style.scss';
import { Outlet } from "react-router-dom";
import React from 'react';
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
