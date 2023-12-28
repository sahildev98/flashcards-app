import './App.css'
import React, { useState } from 'react'
import FlashcardList from './components/flashcardList'
import Navbar from './components/Navbar';
function App() {
  // const [cards, setCards] = useState(sample_Flashcards);
  return (
    <>
      <Navbar />
      <FlashcardList flashcards={sample_Flashcards} />
    </>
  );
}

// static data being used as placeholder 
const sample_Flashcards = [
  {
    id: 1,
    question: 'What is 4 + 4 ?',
    answer: '4',
    options: [2, 3, 5, 4]
  },

  {
    id: 2,
    question: 'What is 5 + 5',
    answer: '10',
    options: [6, 7, 8, 9, 10]
  }
];

export default App
