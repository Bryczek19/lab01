import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { people } from "../module-data"; // Twoje startowe dane do labów 1–4

export default function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, people);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}
