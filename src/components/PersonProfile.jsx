import RatingBar from "./RatingBar";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import { Link } from "react-router-dom";

export default function PersonProfile({ id, name, rating, checked }) {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="card p-3 m-2 shadow-sm">
      <h5 className="mb-3">{name}</h5>
      <RatingBar rate={rating} />

      <div className="d-flex justify-content-between align-items-center mt-3">
        {/* Przycisk do edycji */}
        <Link to={`/lab4/edit/${id}`} className="btn btn-sm btn-primary">
          Edit
        </Link>

        {/* Checkbox */}
        <label className="d-flex align-items-center gap-2 mb-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => dispatch({ type: "check", id })}
          />
          Check
        </label>

        {/* Przycisk Rate */}
        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "rate", id })}
        >
          Rate
        </button>

        {/* Przycisk Delete */}
        <button
          className="btn btn-sm btn-danger"
          onClick={() => dispatch({ type: "delete", id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
