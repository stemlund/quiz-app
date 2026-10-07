import { useContext } from 'react'
import { QuizContext } from '../QuizContext'
import CurrentQuestion from './CurrentQuestion'
import Results from './Results'

function Quiz() {
    const {questions, setQuestions, filteredQuestions, setFilteredQuestions, introAnswers, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers} = useContext(QuizContext)
    return (
        <>
            <h2>Hi {introAnswers[1]}</h2>
            <p>Let's do {introAnswers[3]} {introAnswers[2]}</p>
            {currentQuestionNumber > filteredQuestions.length - 1 ? <Results /> : <CurrentQuestion/>}
        </>
    )
}

export default Quiz