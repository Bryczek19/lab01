import { useContext } from "react";
import AppContext from "../data/AppContext";

export default function useData() {
  return useContext(AppContext).items;
}
