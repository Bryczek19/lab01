import useFetch from "../hooks/useFetch";
import { useReducer } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import TableDataReducer from "../data/TableDataReducer";

export default function Lab5Page() {
  // 🔹 Hooki ZAWSZE najpierw:
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  // 🔹 Teraz możesz sprawdzić dane:
  if (!posts.length || !users.length || !comments.length) {
    return <div className="text-center mt-5">⏳ Wczytywanie danych...</div>;
  }

  const initialData = posts.map((p) => {
    const user = users.find((u) => u.id === p.userId);
    const postComments = comments.filter((c) => c.postId === p.id);
    return {
      user: user || { name: "Nieznany użytkownik" },
      post: p || { title: "Brak tytułu" },
      comments: postComments || [],
    };
  });

  const [tableData, dispatch] = useReducer(TableDataReducer, initialData);

  const handleSort = (type) => {
    dispatch({ type });
  };

  return (
    <div className="container mt-4">
      <h2>Laboratorium 5 — useEffect, useReducer i własne hooki</h2>

      <DropdownButton
        id="dropdown-basic-button"
        title="Sortowanie"
        className="mb-3"
      >
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
          {tableData.map((row, i) => (
            <tr key={i}>
              <td>
                <Link to={`/lab5/user/${row.user?.id}`}>{row.user?.name}</Link>
              </td>
              <td>
                <Link to={`/lab5/post/${row.post?.id}`}>{row.post?.title}</Link>
              </td>
              <td>{row.comments?.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
