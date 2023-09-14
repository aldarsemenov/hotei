import { useDispatch } from "react-redux";
import CartIcon from "../../svg/CartIcon";
import { clearCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";


const CartWidget = ({ cart, sum }) => {
    const dispatch = useDispatch();
    return (
      <div className=" hover:bg-slate-700 transition container p-2    text-center   rounded-xl">
        <Link to ="/cart">
        
            {/* <CartIcon /> X {cart.items.length} */}
            <div><CartIcon /> {sum} р</div>
             
         
          {/* <div>Сумма: {sum} руб</div> */}
        </Link>
       
      </div>
    );
  };
  
  export default CartWidget;