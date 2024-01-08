const Navbar = ({ flashcards, setFlashcards }) => {
    const addNewFlashcard = () => {
        const newFlashcard = {
            id: flashcards.length + 1,
            question: '',
            answer: '',
        };
        setFlashcards([...flashcards, newFlashcard]);
    };

    return (
        <nav>
            <h1 className='title'>Flashyourcard</h1>
            <ul className='nav-links'>
                <li><button onClick={addNewFlashcard}>Add Flashcard</button></li>
                <li><button>Delete Flashcard</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;