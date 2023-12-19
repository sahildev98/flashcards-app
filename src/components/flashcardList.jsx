import React from 'react'
import Flashcard from './flashcard'

const FlashcardList = ({ Flashcards }) =>
  <section>
    {Flashcards.map(flashcard => {
      return <Flashcard flashcard={flashcard} key={Flashcard.id} />
    })}
  </section>

export default FlashcardList;
