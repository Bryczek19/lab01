import { useEffect, useMemo, useReducer } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import useFetch from "../hooks/useFetch";
import TableDataReducer from "../data/TableDataReducer";

export default function Lab5Page() {
  // 3 niezależne pobrania
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  // initialData wyliczamy MEMO – gdy jeszcze brak danych, zwracamy []
  const initialData = useMemo(() => {
    if (!posts.length || !users.length || !comments.length) return [];
    return posts.map((p) => ({
      user: users.find((u) => u.id === p.userId) ?? { id: 0, name: "Unknown" },
      post: p ?? { id: 0, title: "No title" },
      comments: comments.filter((c) => c.postId === p.id) ?? [],
    }));
  }, [posts, users, comments]);

  // UWAGA: hooki ZAWSZE – nawet gdy initialData puste
  const [tableData, dispatch] = useReducer(TableDataReducer, initialData);

  // kiedy initialData się zmieni (przyszły dane) – resetujemy stan
  useEffect(() => {
    if (initialData.length) {
      dispatch({ type: "reset", payload: initialData });
    }
  }, [initialData]);

  const handleSort = (type) => dispatch({ type, payload: initialData });

  // dopiero TERAZ możemy pokazać loader, bez łamania zasad hooków
  if (!initialData.length) {
    return <div className="text-center mt-5">⏳ Wczytywanie danych...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Laboratorium 5 — useEffect, własne hooki i reducer</h2>

      <DropdownButton id="sort-dd" title="Sortowanie" className="mb-3">
        <Dropdown.Item onClick={() => handleSort("asc")}>Rosnąco</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("desc")}>Malejąco</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("reset")}>Naturalnie</Dropdown.Item>
      </DropdownButton>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Użytkownik</th>
            <th>Tytuł posta</th>
            <th>Liczba komentarzy</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.post.id}>
              <td>
                <Link to={`/lab5/user/${row.user.id}`}>{row.user.name}</Link>
              </td>
              <td>
                <Link to={`/lab5/post/${row.post.id}`}>{row.post.title}</Link>
              </td>
              <td>
                <Link to={`/lab5/post/${row.post.id}/comments`}>
                  {row.comments.length}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
