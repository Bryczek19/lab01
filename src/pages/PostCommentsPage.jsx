import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostCommentsPage() {
  const { id } = useParams();

  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!post?.title) {
    return <div className="text-center mt-4">⏳ Wczytywanie posta...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <h4>Komentarze:</h4>

      <ul className="list-group mt-3">
        {comments.map((c) => (
          <li key={c.id} className="list-group-item">
            <b>{c.email}</b><br />
            {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
