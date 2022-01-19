import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.totalAmount);

  const showCartHandler = () => {
    dispatch(toggleActions.press());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
