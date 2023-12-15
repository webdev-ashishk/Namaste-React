import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="boder-2 flex flex-end bg-gray-950 text-white p-4 justify-between">
        <div className="text-5xl font-bold text-purple-800 ml-11">
          <Link to="/">logo</Link>
        </div>
        <ul className="flex gap-10 flex-end pt-2 mr-28">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>login</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
