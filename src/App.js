
import './App.css';
import Menu from './pages/MenuPage';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MainMenu from './components/Mainmenu';
import CartWidget from './components/CartWidget';
import CartProvider from './components/providers/CartProvider';
import Header from './components/Header';

function App() {


  return (
    <div className=" mx-auto container  ">
      <div className="   text-xl  bg-black text-yellow-600 p-4 columns-2 rounded-xl">
        <div className="text-4xl  text-left font-sans "><Link to ="/" >Суши-бар Хотэй</Link></div>
        <div className=" text-right">+7 (902) 533-59-00</div>
        <div className=" text-right">10:00-23:00</div>
        </div>
        <div >
          <Header/>
          {/* <CartProvider>
            <CartWidget />
          </CartProvider> */}
        
      </div>
      <MainMenu />


      <Outlet ></Outlet>

    </div >
  );
}

export default App;
