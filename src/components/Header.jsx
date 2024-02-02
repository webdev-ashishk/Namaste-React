import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="">
      <ul className="flex gap-5 text-4xl bg-gray-700 text-white justify-end font-bold px-52">
        <li>home</li>
        <li>about</li>
        <li>
          <FaShoppingCart />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
