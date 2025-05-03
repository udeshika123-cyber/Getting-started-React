import React from 'react';
import { Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory(); // ✅ initialize history

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={() => history.goBack()}>Back</Button> {/* ✅ use history.goBack() */}
    </div>
  );
}

export default Profile;
