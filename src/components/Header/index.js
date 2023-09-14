import { Link } from "react-router-dom"
import { headercategory } from "../HeaderCategory"
import CartWidget from "../CartWidget"
import CartProvider from "../providers/CartProvider"
import { useDispatch } from "react-redux"
import MenuCard from "../Menucard"

const Header = () => {
   
      window.addEventListener('scroll',()=>{
        let scrollDistance= window.scrollY;
        console.log(scrollDistance)
        if (scrollDistance>=90) {

        }
      })

        // if (item.id==headercategory.id)
        // {
        //     <MenuCard/> 
        // }
    return (
        
        <div className=" sticky top: text-xl mx-auto   w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container flex   ">
            {headercategory.map((item) => (
            <div className="text-2xl hover:bg-orange-400 border-8 border-solid border-indigo-600 container text-center rounded-xl p-2 ">
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