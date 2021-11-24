import { SEARCH_RESTAURANT } from "../context/constant";

export const searchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_RESTAURANT:
      return { ...state, quanAn: payload.quanAn, searchLoading: false };
    default:
      return state;
  }
};
