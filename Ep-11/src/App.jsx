import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  console.log(<Body />);
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
