import React from "react"; //Here importarting react from node_module
import ReactDOM from "react-dom"; //Here importarting react from node_module

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/410/918/non_2x/healthy-food-logo-template-vector.jpg"
          alt=""
        />
      </div>
      <div className="li-item">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AshishRestaurent = () => {
  return (
    <div className="cart">
      <div className="img">
        <img
          src="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h3>Ashish-Restaurent</h3>
        <h4>Rating:4.5</h4>
        <h4>Delivery: 45min</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restaurant-Container">
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
        <AshishRestaurent />
      </div>
    </div>
  );
};
const AppContainer = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* //body // footer */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
