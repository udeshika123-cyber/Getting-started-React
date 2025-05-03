import React from 'react';
import { useHistory } from 'react-router-dom'; // ✅ Import useHistory
import Button from 'react-bootstrap/Button';

export default function About() {
  const history = useHistory(); // ✅ Use inside the component

  return (
    <div>
      <h1>About</h1>
      <Button onClick={() => history.goBack()}>Back</Button> {/* ✅ Correct usage */}
    </div>
  );
}