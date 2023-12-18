// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome from React!"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <div>
      <h1>hello from App component</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
