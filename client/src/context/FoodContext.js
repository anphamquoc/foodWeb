import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { apiUrl, GET_FOOD, LOAD_RESTAURANT } from "./constant";
import { foodReducer } from "../reducers/foodReducer";
import { useParams } from "react-router-dom";
export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [foodState, dispatch] = useReducer(foodReducer, {
    restaurant: null,
    restaurantLoading: true,
    foodLoading: true,
    food: null,
  });
  const params = useParams();

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const response = await axios.get(`${apiUrl}/quanan/${params.id}`);
        if (response.data.success) {
          dispatch({
            type: LOAD_RESTAURANT,
            payload: {
              restaurant: response.data.quanAn,
            },
          });
        }
        return response.data;
      } catch (error) {}
    };
    loadRestaurant();
  }, [params.id]);

  useEffect(() => {
    const loadFood = async () => {
      const response = await axios.get(`${apiUrl}/monan/${params.id}`);
      if (response.data.success) {
        dispatch({
          type: GET_FOOD,
          payload: {
            food: response.data.monAn,
          },
        });
        return response.data;
      }
    };
    loadFood();
  }, [params.id]);

  const foodContextData = {
    foodState,
  };

  return (
    <FoodContext.Provider value={foodContextData}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
