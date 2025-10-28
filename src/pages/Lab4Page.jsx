import React from 'react';
import { Link } from 'react-router-dom';
 
function Lab4(){
  return (
    <>
      <h1>Laboratorium 4</h1>
      <p>Kontekst i formularze.</p>
      <div className="d-flex gap-2">
        <Link className="btn btn-primary" to="/lab4/add">Add person</Link>
      </div>
    </>
  );
}
 
export default Lab4;
 