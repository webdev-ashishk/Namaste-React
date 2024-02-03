import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  // subscribing to the store using useSelector
  // cartItems will get the data of items || when my items are modified then cartItems are modifieds
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <nav className="">
      <ul className="flex gap-5 text-4xl bg-gray-700 text-white justify-end font-bold px-52">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart /> ({cartItems.length} - items )
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
