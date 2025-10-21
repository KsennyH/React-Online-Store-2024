import './scss/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import { Outlet } from "react-router-dom";
import HeaderTemplate from '@/components/header/HeaderTemplate';
import Footer from '@/components/footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {  

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="wrapper">
        <HeaderTemplate />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
