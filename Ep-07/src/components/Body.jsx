import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  //Below state variable are used for solving the issue of search when user search at one time then he will again search not inside filteredRestaurants , search from restaurantList.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log(
  //   restaurants.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  // );
  console.log("body-rendered!");

  useEffect(() => {
    apiCall();
  }, []);
  const API_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5725777&lng=77.3205965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  async function apiCall() {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(restaurantList);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2">
      {/* body and Home page Rendered */}
      <div className="flex">
        <div>
          <input
            type="text"
            className="search border-2 mx-2 p-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search restaurants ... "
          />
          <button
            className="bg-gray-500 p-2 rounded-lg text-white"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
              setSearchText("");
            }}
          >
            search
          </button>
        </div>
        <div className="flex ">
          <button
            type="button"
            className="bg-gray-200 p-2 rounded-lg mx-2"
            onClick={() => {
              console.log("filter is clicked");
              const filterData = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filterData);
            }}
          >
            filter restaurants more than 4 star
          </button>
          <button
            type="button"
            className="bg-gray-200 p-2 rounded-lg mx-2"
            onClick={() => {
              console.log("filter is clicked");
              const filterData = restaurantList.filter(
                (res) => res.info.avgRating < 4
              );
              setFilteredRestaurants(filterData);
            }}
          >
            filter restaurants less than 4 star
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        {/* <RestaurantCard data={allRestaurants} /> */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
