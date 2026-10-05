import { useContext } from 'react'
import { QuizContext } from '../QuizContext'

function Results() {

    const {questions, setQuestions, filteredQuestions, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, isLoading, setIsLoading, error, setError} = useContext(QuizContext)
    console.log(filteredQuestions)
    return (
        <>
        <h2>Results here!</h2>
        {filteredQuestions.map((q) => {
            const userAnswerObj = userAnswers.find((a) => a.id === q.id)
            const userAnswer = userAnswerObj?.userAnswer
            return (
                <div key={q.id}>
                    {q.question}
                    Correct Answer: {q.answer}

                    Your Answer: {userAnswer}

                    You got it {q.answer === userAnswer ? 'right!' : 'wrong!'}
                </div>
            )
            
        })}
        </>
    )
}

export default Results