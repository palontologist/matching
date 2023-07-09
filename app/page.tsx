"use client"
import { useState } from 'react';

export default function IdeaForm() {
  const [idea, setIdea] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call the OpenAI API with the user's idea prompt
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Idea:
        <input type="text" value={idea} onChange={(e) => setIdea(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}