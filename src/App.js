import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';

function App() {
  const [count,setCount]= useState(0);

  const increment = ()=>{
    setCount(count+1);
  }

  const decrement =()=>{
    setCount(count-1);
  }

  useEffect(()=>{
    console.log('New count is : $',count)
  },[count]//<=dependancy array
)

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} > + </Button>
      <> </>
      <Button onClick={decrement}> - </Button>
    </div>
  )
}
export default App