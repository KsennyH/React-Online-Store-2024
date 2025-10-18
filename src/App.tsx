import './scss/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import { Outlet } from "react-router-dom";
import HeaderTemplate from '@/components/header/HeaderTemplate';
import Footer from '@/components/footer/Footer';

function App() {  

  return (
    <div className="wrapper">
      <HeaderTemplate />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
