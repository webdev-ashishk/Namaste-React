import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  // subscribing to the store using useSelector
  // cartItems will get the data of items || when my items are modified then cartItems are modifieds
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <nav className="">
      <ul className="flex gap-5 text-4xl bg-gray-700 text-white justify-end font-bold px-52">
        <li>home</li>
        <li>about</li>
        <li>
          <FaShoppingCart /> ({cartItems.length} - items )
        </li>
      </ul>
    </nav>
  );
};
export default Header;
