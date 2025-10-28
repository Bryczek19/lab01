import { useContext } from "react";
import AppContext from "../data/AppContext";

export default function MyContainer({ element: Element }) {
  const context = useContext(AppContext);
  const items = context.items;

  return (
    <div className="d-flex flex-wrap justify-content-center mt-4">
      {items.map((item) => (
        <div key={item.id} style={{ width: "300px" }}>
          <Element {...item} />
        </div>
      ))}
    </div>
  );
}
