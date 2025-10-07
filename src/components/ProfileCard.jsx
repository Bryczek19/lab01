import ProfileParagraph from './ProfileParagraph';

function ProfileCard(profile) {
  return (
    <div className="container">
      <h2 style={{ marginTop: 0, color: "#333" }}>Profil użytkownika</h2>

      <ProfileParagraph label="Imię" title={profile.name}/>
      <ProfileParagraph label="Email" title={profile.email}/>
      <ProfileParagraph label="Telefon" title={profile.phone}/>
      <ProfileParagraph label="Data urodzin" title={profile.birthDate}/>
    </div>
  );
}

export default ProfileCard;
