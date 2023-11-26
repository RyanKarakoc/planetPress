import React, { createContext, useState, useContext, useEffect } from "react";
import { getAllArticles, getAllEvents } from "../utils/dbFunctions";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [allArticles, setAllArticles] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      setAllArticles(res);
    });
    getAllEvents().then((res) => {
      setAllEvents(res);
    });
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ allArticles, setAllArticles, allEvents, setAllEvents }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
