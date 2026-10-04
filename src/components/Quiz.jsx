import { useContext } from 'react'
import { QuizContext } from '../QuizContext'
import CurrentQuestion from './CurrentQuestion'
import Results from './Results'

function Quiz() {
    const {questions, setQuestions, introAnswers, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers} = useContext(QuizContext)
    const questionSet = questions.filter((q) => q.category === introAnswers[2].toLowerCase() && q.difficulty === introAnswers[3].toLowerCase())
    return (
        <>
            <h2>Hi {introAnswers[1]}</h2>
            <p>Let's do {introAnswers[2]} on level: {introAnswers[3]}</p>
            {currentQuestionNumber > 9 ? <Results /> : <CurrentQuestion filteredQuestions={questionSet} />}
        </>
    )
}

export default Quiz