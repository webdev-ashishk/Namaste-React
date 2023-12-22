import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restMenu = useRestaurantMenu(restId);
  if (restMenu === null) return <h1>Loading ...</h1>;
  console.log(restMenu);
  return (
    <div>
      <h1 className="text-2xl font-bold">hotel name - {restMenu.name}</h1>
      <h2>cuisine - {restMenu.cuisines.join(",")}</h2>
      <h3>city - {restMenu.city}</h3>
    </div>
  );
};

export default RestaurantMenu;
