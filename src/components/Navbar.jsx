import { useState } from "react";
import FlashcardForm from "./flashcardForm";
const Navbar = ({ setFormVisible }) => {
    return (
        <nav>
            <h1 className='title'>Flashyourcard</h1>
            <ul className='nav-links'>
                <li><button onClick={() => setFormVisible(true)}>Add Flashcard</button></li>
            </ul>
        </nav >
    );
};

export default Navbar;