import logo from './logo.svg';
import './App.css';
import Menu from './pages/MenuPage';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/Mainmenu';
import CartWidget from './components/CartWidget';
import CartProvider from './components/providers/CartProvider';

function App() {

  
  return (
    <div className=" container mx-auto">
      <div className="flexbox italic text-6xl container bg-black text-yellow-600 p-4 columns-3">
        <div className=" flex">Хотэй</div>
        <div className="flex text-xl  text-rigth">8(902)533-59-00  </div>
        <div className="flex text-xl  text-left box-border   ">10:00-23:00</div>  
        <div className='text-xl'><CartProvider>
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
