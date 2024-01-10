import { useState } from "react";
import FlashcardForm from "./flashcardForm";
const Navbar = ({ newCard, deleteCard }) => {
    return (
        <nav>
            <h1 className='title'>Flashyourcard</h1>
            <ul className='nav-links'>
                <li><button onClick={newCard}>Add Flashcard</button></li>
                <li><button onClick={deleteCard}>Delete Flashcard</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;