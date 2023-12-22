import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restMenu, setRestMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setRestMenu(json?.data?.cards[0]?.card?.card?.info);
  }

  return restMenu;
};
export default useRestaurantMenu;
