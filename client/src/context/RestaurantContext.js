import { createContext, useEffect, useReducer } from "react";
import { apiUrl, GET_RESTAURANT, GET_FILTER_NAME } from "./constant";
import axios from "axios";
import { restaurantReducer } from "../reducers/restaurantReducer";
export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ children }) => {
  const [restaurantState, dispatch] = useReducer(restaurantReducer, {
    restaurant: null,
    loadingRestaurant: true,
    filter: null,
    loadingFilter: true,
  });

  const loadRestaurant = async () => {
    const response = await axios.get(`${apiUrl}/quanan`);
    if (response.data.success) {
      dispatch({
        type: GET_RESTAURANT,
        payload: {
          restaurant: response.data.quanAn,
        },
      });
    }
    return response.data;
  };
  const loadFilter = async () => {
    const response = await axios.get(`${apiUrl}/loaimonan`);
    if (response.data.success) {
      dispatch({
        type: GET_FILTER_NAME,
        payload: {
          filter: response.data.loaiMonAn,
        },
      });
    }
  };
  useEffect(() => {
    loadRestaurant();
  }, []);
  useEffect(() => {
    loadFilter();
  }, []);

  const restaurantContextData = {
    loadRestaurant,
    restaurantState,
  };

  return (
    <RestaurantContext.Provider value={restaurantContextData}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
