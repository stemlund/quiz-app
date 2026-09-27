import { useState, useEffect, useContext } from 'react'
import './App.css'
import CurrentQuestion from './components/CurrentQuestion'
import { QuizContext } from './QuizContext'
import Results from './components/Results'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


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

  const quiz = {questions, setQuestions, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers, isLoading, setIsLoading, error, setError}
  console.log(quiz)

  return (
    <QuizContext.Provider value={quiz}>
      <h1>Amelia's Quiz Game 3000</h1>
      
      {currentQuestionNumber > questions.length - 1 ? <Results /> : <CurrentQuestion />}
      

    </QuizContext.Provider>
  )
}

export default App
