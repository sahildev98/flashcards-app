import React from 'react'
import Flashcard from './flashcard'

const FlashcardList = ({ flashcards }) =>
  <section>
    {flashcards.map(Flashcard, id => {
      return <Flashcard {...flashcard} key={id} />
    })}
  </section>

export default FlashcardList;
