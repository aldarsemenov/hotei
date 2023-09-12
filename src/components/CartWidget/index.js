import { useDispatch } from "react-redux";
import CartIcon from "../../svg/CartIcon";
import { clearCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";


const CartWidget = ({ cart, sum }) => {
    const dispatch = useDispatch();
    return (
      <div className="mx-auto  container flex flex-row-reverse text-right">
        <Link to ="/cart">
          <div className="flex justify-end">
            <CartIcon /> X {cart.items.length}
          </div>
          <div>Сумма: {sum} руб</div>
        </Link>
       
      </div>
    );
  };
  
  export default CartWidget;