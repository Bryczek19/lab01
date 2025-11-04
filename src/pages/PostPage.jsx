import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostPage() {   // <-- MUSI być "export default"
  const { id } = useParams();
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  if (!post || !comments.length) {
    return <div className="text-center mt-5">⏳ Wczytywanie danych...</div>;
  }

  const postComments = comments.filter((c) => c.postId === parseInt(id));

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h5 className="mt-4">Komentarze:</h5>
      <ul>
        {postComments.map((c) => (
          <li key={c.id}>
            <b>{c.email}:</b> {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
