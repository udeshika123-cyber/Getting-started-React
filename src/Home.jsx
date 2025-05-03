import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import About from './About';
import { useHistory } from 'react-router-dom';



 function Home() {
    const History = useHistory();
  return (
    <div>
      <h1>Home page</h1>
      <Link to ="/profile">Go to the profile page</Link><br/>
      <Link to = "/about">Go to the about page</Link><br/>
      <Button onClick={()=> History.push("/profile")}>Profile</Button><> </>
      <Button onClick={()=> History.push("/About")}>About</Button>
    </div>
  )
}
export default Home