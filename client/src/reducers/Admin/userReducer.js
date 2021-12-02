import { DELETE_USER, GET_ALL_USER, UPDATE_ROLE } from "context/constant";

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER:
      return { ...state, users: payload, userLoading: false };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload._id),
      };
    case UPDATE_ROLE:
      const index = state.users.findIndex((user) => user._id === payload._id);
      state.users[index] = payload;
      return { ...state };
    default:
      return state;
  }
};
