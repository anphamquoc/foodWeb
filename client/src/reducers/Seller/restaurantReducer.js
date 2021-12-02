import {
  ADD_RESTAURANT,
  DELETE_RESTAURANT,
  LOAD_RESTAURANT,
  UPDATE_RESTAURANT,
} from "context/constant";

export const restaurantReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_RESTAURANT:
      return { ...state, restaurants: payload, restaurantLoading: false };
    case ADD_RESTAURANT:
      return { ...state, restaurants: [...state.restaurants, payload] };
    case UPDATE_RESTAURANT:
      const index = state.restaurants.findIndex((r) => r._id === payload._id);
      state.restaurants[index] = payload;
      return { ...state };
    case DELETE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant._id !== payload._id
        ),
      };
    default:
      return { ...state };
  }
};
