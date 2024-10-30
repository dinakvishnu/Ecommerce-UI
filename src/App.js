import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function Submit({ isPending }) {
  return <button disabled={isPending}>Submit</button>;
}

function App() {
  // const [isPending, setIsPending] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   setIsPending(true); // Set pending state to true

  //   // Simulate form submission (2 second delay)
  //   setTimeout(() => {
  //     setIsPending(false); // Reset pending state
  //     alert("Form submitted!");
  //   }, 2000);
  // };

  return (
  

    <BrowserRouter>
     {/* <form onSubmit={handleSubmit}>
      <Submit isPending={isPending} />
    </form> */}
    

    <Routes>
     <Route path="/" element={<Home />} /> 
    </Routes>

    </BrowserRouter>
  );
}

export default App;
