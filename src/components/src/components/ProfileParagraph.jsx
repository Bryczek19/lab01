function ProfileParagraph(props) {
  return (
    <div>
      <strong>{props.label}:</strong>
      <p>{props.title}</p>
    </div>
  );
}

export default ProfileParagraph;
