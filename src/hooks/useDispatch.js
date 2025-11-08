import { useContext } from "react";
import AppContext from "../data/AppContext";

export default function useDispatch() {
  return useContext(AppContext).dispatch;
}
S