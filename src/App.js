
import './App.css';
import Menu from './pages/MenuPage';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MainMenu from './components/Mainmenu';
import CartWidget from './components/CartWidget';
import CartProvider from './components/providers/CartProvider';

function App() {


  return (
    <div className=" mx-auto container w-full">
      <div className="flexbox italic text-xl container bg-black text-yellow-600 p-4 columns-3">
        <div className="  text-6xl"><Link to ="/" >Хотэй</Link></div>
        <div>8(902)533-59-00  </div>
        <div>10:00-23:00</div>
        <div>
          <CartProvider>
            <CartWidget />
          </CartProvider>
        </div>
      </div>
      <MainMenu />


      <Outlet ></Outlet>

    </div >
  );
}

export default App;
