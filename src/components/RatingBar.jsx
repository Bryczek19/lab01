export default function RatingBar({ rate = 0 }) {
  const totalStars = 10;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rate ? "#f5b301" : "#ccc" }}>
        ★
      </span>
    );
  }

  return <div style={{ fontSize: "1.2rem" }}>{stars}</div>;
}
