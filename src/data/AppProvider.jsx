import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { people } from "../module-data";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, people);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
