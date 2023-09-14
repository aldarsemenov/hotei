
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
    
    <div className="  w-full">
      
      <div className="h-60 presentation presentation:after  text-xl   text-yellow-600  ">
        <div className="mx-6 text-5xl text-white w-56   "><Link to ="/" >Суши-бар Хотэй</Link></div>
        
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
