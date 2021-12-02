import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { foodReducer } from "reducers/Seller/foodReducer";
import {
  ADD_FOOD,
  apiUrl,
  DELETE_FOOD,
  GET_FOOD,
  UPDATE_FOOD,
} from "context/constant";

export const FoodSContext = createContext();

const FoodSContextProvider = ({ children }) => {
  const [foodState, dispatch] = useReducer(foodReducer, {
    foods: null,
    foodLoading: true,
  });
  const params = useParams();

  useEffect(() => {
    const loadFood = async () => {
      try {
        const response = await axios.get(`${apiUrl}/monan/${params.id}`);
        if (response.data.success) {
          dispatch({
            type: GET_FOOD,
            payload: response.data.monAn,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadFood();
  }, [params.id]);

  const addFood = async (food) => {
    try {
      const response = await axios.post(`${apiUrl}/monan/${params.id}`, food);
      if (response.data.success) {
        dispatch({
          type: ADD_FOOD,
          payload: response.data.monAn,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateFood = async (id, food) => {
    try {
      const response = await axios.put(`${apiUrl}/seller/food/${id}`, food);
      if (response.data.success) {
        dispatch({
          type: UPDATE_FOOD,
          payload: response.data.monAn,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteFood = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/seller/food/${id}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_FOOD,
          payload: response.data.monAn,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const foodData = {
    foodState,
    addFood,
    updateFood,
    deleteFood,
  };
  return (
    <FoodSContext.Provider value={foodData}>{children}</FoodSContext.Provider>
  );
};

export default FoodSContextProvider;
