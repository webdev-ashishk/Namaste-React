import React from "react";

export default function Header() {
  return (
    <div className="container">
      <img
        src="https://www.nicepng.com/png/detail/213-2132991_star-movies-hd-logo.png"
        alt="logo"
        className="logo"
      />
      <div id="navItem">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Catagery</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
