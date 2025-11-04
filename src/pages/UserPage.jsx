import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function UserPage() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user || !user.name) {
    return <div className="text-center mt-5">⏳ Wczytywanie danych użytkownika...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Telefon:</b> {user.phone}
      </p>
      <p>
        <b>Strona:</b> {user.website}
      </p>
      <p>
        <b>Firma:</b> {user.company?.name}
      </p>
      <p>
        <b>Miasto:</b> {user.address?.city}
      </p>
    </div>
  );
}
