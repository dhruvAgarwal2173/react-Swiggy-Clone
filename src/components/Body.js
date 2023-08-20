import { restaurantList } from "../constants.js";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_LISTING_URL, SWIGGY_RESTAURANT_MENU } from "../constants.js"
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_LISTING_URL);
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(allRestaurants, filteredRestaurants, data)
  }

  console.log("render");

  // not render component (Early return)
  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)
    return <Shimmer />;
  // allRestaurants.length = 0;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={restaurant.cta.link} key={restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
