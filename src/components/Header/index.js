import { Link } from "react-router-dom"
import { headercategory } from "../HeaderCategory"
import CartWidget from "../CartWidget"
import CartProvider from "../providers/CartProvider"
import { useDispatch } from "react-redux"
import MenuCard from "../Menucard"
import { useEffect } from "react"

const Header = () => {
    // useEffect(()=> {
    //   window.addEventListener("scroll",scrollDistance)
    //   return () => {
    //     window.removeEventListener("scroll",scrollDistance)
    //   }
    // });
  
 
    return (
        

        <div className="shadow-lg my-2 text-xl mx-auto   w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   flex   ">
            {headercategory.map((item) => (
            <div className=" text-2xl hover:bg-slate-700  container align-middle text-center rounded-xl p-2 hover:text-white  transition border-6 border-indigo-500">
                <Link to={`/catalog/${item.categ}`}>
                    

                    {item.name}</Link> 
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