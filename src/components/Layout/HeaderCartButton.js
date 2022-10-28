import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartProvider from "../../store/CartProvider";
import CartContext from "../../store/cart-context";
import Classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
