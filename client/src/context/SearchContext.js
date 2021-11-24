import { createContext, useReducer, useEffect } from "react";
import { searchReducer } from "../reducers/searchReducer";
import { apiUrl, SEARCH_RESTAURANT } from "./constant";
import { useParams } from "react-router-dom";
import axios from "axios";
export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(searchReducer, {
    quanAn: null,
    searchLoading: true,
  });
  const params = useParams();
  const searchText = params.search;
  useEffect(() => {
    const loadSearch = async () => {
      try {
        const response = await axios.get(`${apiUrl}/search/${searchText}`);
        if (response.data.success) {
          dispatch({
            type: SEARCH_RESTAURANT,
            payload: {
              quanAn: response.data.quanAn,
            },
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    loadSearch();
  }, [searchText]);
  const searchFood = async (searchText) => {
    try {
      const response = await axios.get(`${apiUrl}/search/${searchText}`);
      if (response.data.success) {
        dispatch({
          type: SEARCH_RESTAURANT,
          payload: {
            quanAn: response.data.quanAn,
          },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const SearchContextData = {
    searchState,
    searchFood,
  };
  return (
    <SearchContext.Provider value={SearchContextData}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
