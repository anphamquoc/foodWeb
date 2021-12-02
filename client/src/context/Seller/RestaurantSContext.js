import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { restaurantReducer } from "reducers/Seller/restaurantReducer";
import {
  ADD_RESTAURANT,
  apiUrl,
  DELETE_RESTAURANT,
  LOAD_RESTAURANT,
  UPDATE_RESTAURANT,
} from "context/constant";
import { RestaurantContext } from "context/RestaurantContext";

export const RestaurantSContext = createContext();

const RestaurantSContextProvider = ({ children }) => {
  const [restaurantState, dispatch] = useReducer(restaurantReducer, {
    restaurantLoading: true,
    restaurants: null,
  });
  const { loadRestaurant } = useContext(RestaurantContext);

  const loadRestaurants = async () => {
    try {
      const response = await axios.get(`${apiUrl}/seller/restaurant`);
      if (response.data.success) {
        dispatch({
          type: LOAD_RESTAURANT,
          payload: response.data.quanAn,
        });
      } else {
        dispatch({
          type: LOAD_RESTAURANT,
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const addRestaurant = async (restaurant) => {
    try {
      const response = await axios.post(`${apiUrl}/quanan`, restaurant);
      if (response.data.success)
        dispatch({
          type: ADD_RESTAURANT,
          payload: response.data.newQA,
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateRestaurant = async (id, restaurant) => {
    try {
      const response = await axios.put(
        `${apiUrl}/seller/restaurant/${id}`,
        restaurant
      );
      if (response.data.success) {
        dispatch({
          type: UPDATE_RESTAURANT,
          payload: response.data.quanAn,
        });
      }
      loadRestaurant();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/seller/restaurant/${id}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_RESTAURANT,
          payload: response.data.quanAn,
        });
      }
      loadRestaurant();
    } catch (error) {
      console.log(error.message);
    }
  };

  const restaurantData = {
    restaurantState,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
  };

  return (
    <RestaurantSContext.Provider value={restaurantData}>
      {children}
    </RestaurantSContext.Provider>
  );
};

export default RestaurantSContextProvider;
