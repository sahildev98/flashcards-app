import React from 'react'
import Flashcard from './flashcard'

const FlashcardList = ({ flashcards }) =>
  <section>
    {flashcards.map(flashcard => {
      return <Flashcard flashcard={flashcard} key={flashcard.id} />
    })}
  </section>

export default FlashcardList;
