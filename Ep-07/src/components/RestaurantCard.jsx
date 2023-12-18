import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);

  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  const {
    cloudinaryImageId,
    avgRatingString,
    name,
    cuisines,
    availability,
    areaName,
    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = resData?.info;
  return (
    <div
      className="border-2 m-4 w-[300px] rounded-lg hover:scale-x-95 overflow-wrap-break-word"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />

      <ul className="pl-2 w-[300px]">
        <li className="font-bold">{name}</li>
        <li className="overflow-wrap-normal">{cuisines.join(",")}</li>
        <li className="flex">
          {avgRatingString}
          <FaStar className="px-1 text-green-500 text-2xl" />
        </li>
        <li className="ml-2">{areaName}</li>
        <li className="ml-2">{availability.nextCloseTime}</li>
      </ul>
    </div>
  );
};
export default RestaurantCard;
