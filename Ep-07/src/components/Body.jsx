import { useEffect, useState } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [restaurantList, setRestaurantList] = useState([]);
  const API_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5725777&lng=77.3205965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  async function apiCall() {
    const data = await fetch(API_URL);
    const json = await data.json();
    setAllRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  // console.log(
  //   restaurants.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  // );
  console.log(allRestaurants);

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      body and Home page Rendered *{/* TODO */}
      {/* <RestaurantCard data={allRestaurants} /> */}
      {allRestaurants.map((restaurant) => (
        <div key="info.parentId">
          <h2>cost-for-two---{restaurant.info.costForTwo}</h2>
          <ul>
            <li>{restaurant.info.cloudinaryImageId}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Body;
