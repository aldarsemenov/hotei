import { useDispatch } from "react-redux";
import CartIcon from "../../svg/CartIcon";
import { clearCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";


const CartWidget = ({ cart, sum }) => {
    const dispatch = useDispatch();
    return (
      <div className=" hover:bg-slate-700 transition box-border w-32 justify-center  container flex w-40 text-center flex   rounded-xl">
        <Link to ="/cart">
        <div className="inline-flex w-32 justify-center py-3 flex-wrap">

        <CartIcon /> {sum} р

        </div>
            {/* <CartIcon /> X {cart.items.length} */}
         
             
         
          {/* <div>Сумма: {sum} руб</div> */}
        </Link>
       
      </div>
    );
  };
  
  export default CartWidget;