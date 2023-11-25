import React, { createContext, useState, useContext, useEffect } from "react";
import { getAllArticles } from "../utils/dbFunctions";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      setAllArticles(res);
    });
  }, []);

  return (
    <GlobalStateContext.Provider value={{ allArticles, setAllArticles }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
