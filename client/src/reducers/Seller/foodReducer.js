import { ADD_FOOD, DELETE_FOOD, GET_FOOD, UPDATE_FOOD } from "context/constant";

export const foodReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOD:
      return { ...state, foods: payload, foodLoading: false };
    case ADD_FOOD:
      return { ...state, foods: [...state.foods, payload] };
    case UPDATE_FOOD:
      const index = state.foods.findIndex((food) => food._id === payload._id);
      state.foods[index] = payload;
      return { ...state };
    case DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food) => food._id !== payload._id),
      };
    default:
      return { ...state };
  }
};
