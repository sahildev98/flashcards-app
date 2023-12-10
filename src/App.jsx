import './App.css'
function App() {

  return (
    <>
      <h1>Hello world</h1>
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
]

export default App
