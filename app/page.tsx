"use client"
import { useState } from 'react';

export default function Home() {

  const makeAPIcall = async () => {
    await fetch ('/api/hello',{
      method:'POST',
      body:JSON.stringify({hello:'world'})
    }
    )
  };  
    // Call the OpenAI API with the user's idea prompt


  return (
    
      <button onClick={makeAPIcall}>Submit</button>
  );
}
