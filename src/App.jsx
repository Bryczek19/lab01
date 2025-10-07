import ProfileCard from './components/ProfileCard';
import { people } from './module-data';

function App() {
  return (
    <>
      {people.map(person => (
        <ProfileCard
          key={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
          birthDate={person.birthDate}
        />
      ))}
    </>
  );
}

export default App;
