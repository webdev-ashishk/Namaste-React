import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  if (resMenu === null)
    return (
      <div>
        <h1>restmenu is null</h1>
      </div>
    );
  async function fetchMenu() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json?.data?.cards[0].card?.card?.info);
  }

  console.log(resMenu);
  return (
    <div>
      <p>reading url id = {resId}</p>
      <h1>hotel name - {resMenu.name}</h1>
      <h2>cuisine - {resMenu.cuisines.join(",")}</h2>
      <h3>city - {resMenu.city}</h3>
      <h2>Hotel Menu</h2>
    </div>
  );
};

export default RestaurantMenu;
