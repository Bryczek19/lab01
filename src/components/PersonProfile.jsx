import RatingBar from "./RatingBar";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import { Link } from "react-router-dom";

export default function PersonProfile({ id, name, email, phone, url, photo, rating, checked }) {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="card p-3 m-2 shadow-sm text-center">
      {/* Zdjęcie */}
      {photo && (
        <img
          src={photo}
          alt={name}
          className="rounded-circle mx-auto mb-3"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
      )}

      {/* Imię */}
      <h5 className="mb-2 text-primary">{name}</h5>

      {/* Dane kontaktowe */}
      {email && <p className="mb-1 text-muted small">{email}</p>}
      {phone && <p className="mb-1 text-muted small">📞 {phone}</p>}
      {url && (
        <p className="mb-2 small">
          🌐 <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </p>
      )}

      {/* Pasek ocen */}
      <RatingBar rate={rating} />

      {/* Przyciski */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Link to={`/lab4/edit/${id}`} className="btn btn-sm btn-primary">
          Edit
        </Link>

        <label className="d-flex align-items-center gap-1 mb-0 small">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => dispatch({ type: "check", id })}
          />
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
