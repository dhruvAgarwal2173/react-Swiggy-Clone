import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  deliveryTime
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h5>{deliveryTime} minutes</h5>

    </div>
  );
};

export default RestaurantCard;
