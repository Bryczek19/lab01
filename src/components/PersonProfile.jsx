import RatingBar from "./RatingBar";

export default function PersonProfile({ id, name, rating, checked, dispatch }) {
  return (
    <div className="card p-3 m-2 shadow-sm">
      <h5>{name}</h5>
      <RatingBar rate={rating} />

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => alert("Edit (będzie później)")}
        >
          Edit
        </button>

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => dispatch({ type: "check", id })}
          />{" "}
          Check
        </label>

        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "rate", id })}
        >
          Rate
        </button>

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
