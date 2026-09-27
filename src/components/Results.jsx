import { useContext } from 'react'
import { QuizContext } from '../QuizContext'

function Results() {

    const {questions, setQuestions, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, isLoading, setIsLoading, error, setError} = useContext(QuizContext)

    return (
        <>
        <h2>Results here!</h2>
        {userAnswers.map((a) => (
            <div key={a.userAnswer}>{a.userAnswer}

            </div>
        ))}
        </>
    )
}

export default Results