import { IMG_CDN_URL } from "../constants.js";
import {Paper} from "@mui/material";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo
}) => {
  return (
    <Paper className="card" sx={{backgroundColor: "#FCFCFC"}}>
      <img style={{borderRadius: "4px"}} src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{avgRating}/5 🔥</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </Paper>
  );
};

export default RestaurantCard;
