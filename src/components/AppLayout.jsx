import { Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Body />
      <Footer />
    </div>
  );
}
