import React from 'react'
function flashcardForm() {
    return (
        <form>
            <label htmlFor="question">Question:</label>
            <textarea id="question" />
            <label htmlFor="answer">Answer:</label>
            <textarea id="answer" />
        </form>
    )
}

export default flashcardForm
