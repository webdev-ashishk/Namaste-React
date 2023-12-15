import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="text-2xl font-bold text-red-500">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
