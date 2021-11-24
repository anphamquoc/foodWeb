import { GET_FILTER_NAME, GET_RESTAURANT } from "../context/constant";

export const restaurantReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurant: payload.restaurant,
        loadingRestaurant: false,
      };
    case GET_FILTER_NAME:
      return { ...state, loadingFilter: false, filter: payload.filter };
    default:
      return state;
  }
};
