import MyContainer from "../components/MyContainer";
import PersonProfile from "../components/PersonProfile";

export default function Lab03Page() {
  return (
    <div className="container mt-4">
      <h2>Laboratorium 3 — Komponenty, właściwości i stan</h2>
      <MyContainer element={PersonProfile} />
    </div>
  );
}
