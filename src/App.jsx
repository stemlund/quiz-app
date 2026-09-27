import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [questions, setQuestions] = useState([])
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  function handleQuestionChange () {
    setCurrentQuestionNumber((q) => q + 1)
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch('./src/data/questions.json')
        if(!response.ok) {
          throw new Error( `Error fetching questions. status ${response.status}`)
        }
        const data = await response.json();
        setQuestions(data)
      } catch (error) {
          setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchQuestions()
  }, [])

  return (
    <>
    <h1>Amelia's Quiz Game 3000</h1>
    {isLoading ? 'Loading questions' : ''}
    {error ? `Error: ${error.message}` : ''}
    {questions[currentQuestionNumber]?.question}
    {questions[currentQuestionNumber]?.options[0]}
    {questions[currentQuestionNumber]?.options[1]}
    {questions[currentQuestionNumber]?.options[2]}
    {questions[currentQuestionNumber]?.options[3]}
    {questions.length - 1 <= currentQuestionNumber ? '' : <button onClick={handleQuestionChange}>Next Question</button>}
    
    </>
  )
}

export default App
