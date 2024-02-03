import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribing to the Cart to store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="w-6/12 m-auto my-11 text-2xl font-bold text-blue-400 border-2">
      <h1 className="text-center">Cart</h1>
      <button
        className="bg-black text-white rounded-lg px-4 mx-4 py-2"
        onClick={handleClearCart}
      >
        clear cart
      </button>
      {cartItems.map((element) => (
        <p key={element.id} className="border-2 px-2 my-4 mx-3">
          {element.brand}
        </p>
      ))}
    </div>
  );
};

export default Cart;
