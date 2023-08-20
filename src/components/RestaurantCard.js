import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{avgRating}/5 🔥</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
