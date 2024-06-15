import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <p>Header.jsx rendered!</p>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
