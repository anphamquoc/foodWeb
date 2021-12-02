import { SET_AUTH, UPDATE_USER } from "../context/constant";

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        authLoading: false,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
        isSeller: payload.isSeller,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};
