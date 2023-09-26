import { Link } from "react-router-dom"
import { headercategory } from "../HeaderCategory"
import CartWidget from "../CartWidget"
import CartProvider from "../providers/CartProvider"
import { useDispatch } from "react-redux"
import MenuCard from "../Menucard"
import { useEffect, useState } from "react"

const Header = () => {


      // const header = document.querySelector('.header');
      // const first = document.querySelector('.first');
    

  

      //   window.addEventListener("scroll",()=> {
      //     let scrollDistance = window.scrollY;
      //     if (scrollDistance>=240)
      //     {
      //       header.classList.add('header--fixed');
            
      //     } else {
      //       header.classList.remove('header--fixed');
            
      //     }

      //   });
       
    return (
        
      
       <div className=" shadow-lg my-2 text-xl mx-auto   w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   flex   ">
            {headercategory.map((item) => (
            <div className="text-2xl item-center hover:bg-slate-700  container align-middle text-center rounded-xl p-2 hover:text-white  transition border-6 border-indigo-500">
                <button>
                <Link to={`/catalog/${item.categ}`}>
                    {item.name}</Link> 

                </button>
                    

            </div>
            ))

            }
            <CartProvider>
            <CartWidget />
          </CartProvider>
          
        </div>
          )
}
export default Header