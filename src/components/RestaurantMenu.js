import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, SWIGGY_RESTAURANT_MENU } from "../constants";
import Shimmer from "./Shimmer.js";


const RestaurantMenu = () => {
    const { restaurantId } = useParams()
    const [restaurant, setRestaurant] = useState(null)
    console.log(restaurantId)
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch(SWIGGY_RESTAURANT_MENU + restaurantId)
        const json = await data?.json()
        setRestaurant(json?.data)  
    }
   
    return (!restaurant) ? <Shimmer /> : (
        <>
            <div>
                <h1>Restaurant id : { restaurantId }</h1>
                <h2>{restaurant.name}</h2>
                <img src={ IMG_CDN_URL + restaurant.cloudinaryImageId }/>
                <h3>{ restaurant.area }, { restaurant.city }</h3>
                <h3>{ restaurant.avgRating } stars</h3>
                <h4>{ restaurant.costForTwoMsg }</h4>
                <h3>{ restaurant.cuisines }</h3>
            </div>
            <div>
                <div>
                    <ul>
                        { Object.values(restaurant?.menu?.items).map((item) => (
                            <li key={item?.id}>{ item.name }</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu