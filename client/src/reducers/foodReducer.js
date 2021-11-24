import { GET_FOOD, LOAD_RESTAURANT } from "../context/constant";

export const foodReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOD:
      return { ...state, food: payload.food, foodLoading: false };
    case LOAD_RESTAURANT:
      return {
        ...state,
        restaurantLoading: false,
        restaurant: payload.restaurant,
      };
    default:
      return state;
  }
};
