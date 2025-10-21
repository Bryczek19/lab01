import MyContainer from "../components/MyContainer";
import PersonProfile from "../components/PersonProfile";


const people = [
  { id: 1, name: "Ala", rating: 0, checked: false },
  { id: 2, name: "Ela", rating: 3, checked: false },
  { id: 3, name: "Karol", rating: 5, checked: false },
  { id: 4, name: "Ola", rating: 2, checked: false },
  { id: 5, name: "Monika", rating: 4, checked: false },
  { id: 6, name: "Robert", rating: 1, checked: false }
];

export default function Lab03Page() {
  return (
    <div className="container mt-4">
      <h2>Laboratorium 3 — Komponenty, właściwości i stan</h2>
      <MyContainer element={PersonProfile} data={people} />
    </div>
  );
}
