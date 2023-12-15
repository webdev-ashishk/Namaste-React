import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const [restaurantList, setRestaurantList] = useState([]);
  const API_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5725777&lng=77.3205965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  async function apiCall() {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurants(json);
  }

  // console.log(
  //   restaurants.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  // );
  console.log(restaurants);

  useEffect(() => {
    apiCall();
  }, []);
  return <div>body and Home page Rendered *</div>;
};
export default Body;
