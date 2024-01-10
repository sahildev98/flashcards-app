import './App.css'
import React, { useState } from 'react'
import FlashcardList from './components/flashcardList'
import Navbar from './components/Navbar';
import FlashcardForm from './components/flashcardForm';
function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const newCard = () => {
    setFormVisible(true);
  }

  const deleteCard = () => {
    setFormVisible(false);
  }

  return (
    <>
      <Navbar newCard={newCard} deleteCard={deleteCard} />
      {formVisible && <FlashcardForm />}
      <FlashcardList flashcards={flashcards} />
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
