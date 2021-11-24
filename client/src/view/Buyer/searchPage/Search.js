import React from "react";
import Header from "components/main/Header";
import Footer from "components/main/Footer";
import SearchPage from "components/main/SearchPage/SearchPage";
import "./Search.css";
import SearchContextProvider from "context/SearchContext";
const Search = () => {
  return (
    <SearchContextProvider>
      <Header />
      <SearchPage />
      <Footer />
    </SearchContextProvider>
  );
};

export default Search;
