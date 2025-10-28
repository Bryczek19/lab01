import React, { useContext } from 'react';
import ProfileParagraph from './ProfileParagraph';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';
 
function Lab3ProfileCard({ id, name, email, phone, birthDate, rating = 0, checked = false }) {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };
 
  const handleCheck = () => {
    dispatch({
      type: "check",
      id: id
    });
  };
 
  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };
 
  const handleRate = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    dispatch({
      type: "rate",
      id: id,
      rating: newRating
    });
  };
 
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title mb-3 text-primary">Profil użytkownika</h5>
        <ProfileParagraph label="Imię" title={name}/>
        <ProfileParagraph label="Email" title={email}/>
        <ProfileParagraph label="Telefon" title={phone}/>
        <ProfileParagraph label="Data urodzin" title={birthDate}/>
       
        <div className="mb-3">
          <RatingBar rate={rating} />
        </div>
       
        <div className="mt-3">
          <div className="d-flex flex-wrap gap-2 mb-2">
            <Button variant="primary" size="sm" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="success" size="sm" onClick={handleCheck}>
              Check
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="warning" size="sm" onClick={handleRate}>
              Rate
            </Button>
          </div>
         
          <Form.Check
            type="checkbox"
            id={`check-${id}`}
            label="Zaznacz"
            checked={checked}
            onChange={handleCheck}
          />
        </div>
      </div>
    </div>
  );
}
 
export default Lab3ProfileCard;