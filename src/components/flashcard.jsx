import React, { useState } from 'react'
function Flashcard({ question, answer }) {
  // state func added to show or hide question/answer
  const [showAnswer, setShowAnswer] = useState(false);
  // event handler to toggle between question and answer
  const flipToggle = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <section onClick={flipToggle}>
      {showAnswer ? answer : question}
    </section >
  )
}

export default Flashcard;
