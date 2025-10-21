import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

export default function MyContainer({ element: Element, data }) {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="d-flex flex-wrap justify-content-center mt-4">
      {state.map((item) => (
        <div key={item.id} style={{ width: "300px" }}>
          <Element {...item} dispatch={dispatch} />
        </div>
      ))}
    </div>
  );
}
