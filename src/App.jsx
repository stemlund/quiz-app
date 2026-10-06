import { useState, useEffect, useContext } from 'react'
import './App.css'
import CurrentQuestion from './components/CurrentQuestion'
import { QuizContext } from './QuizContext'
import Results from './components/Results'
import IntroForm from './components/IntroForm'
import Quiz from './components/Quiz'

function App() {
  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [introAnswers, setIntroAnswers] = useState({})
  const [startQuiz, setStartQuiz] = useState(false)
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

  useEffect(() => {
    const allMatchedQuestions = questions.filter((q) => q.category === introAnswers[2].toLowerCase() && q.difficulty === introAnswers[3].toLowerCase())
    const randomTen = allMatchedQuestions.sort((a, b) => Math.random() -0.5).slice(0,10)
    setFilteredQuestions(randomTen)
  }, [startQuiz])

  const quiz = {questions, setQuestions, filteredQuestions, setFilteredQuestions, introAnswers, setIntroAnswers, startQuiz, setStartQuiz, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers, isLoading, setIsLoading, error, setError}
  console.log(quiz)


  // ask for their name
  // ask their difficulty level
  // save difficulty level in state
  // build questions array of random 10 questions at that difficulty level
  // display current question of that questions array 
  // show results of just those random questions array

  return (
    <QuizContext.Provider value={quiz}>
      <h1>Amelia's Quiz Game 3000</h1>

      {startQuiz ? <Quiz /> : <IntroForm />}     

    </QuizContext.Provider>
  )
}

export default App
