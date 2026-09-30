import { useContext } from "react";
import { QuizContext } from '../QuizContext'


function CurrentQuestion() {

    const {name, setName, questions, setQuestions, currentQuestionNumber, setCurrentQuestionNumber, setUserAnswers, isLoading, setIsLoading, error, setError} = useContext(QuizContext)

    // function handleQuestionChange () {
    // setCurrentQuestionNumber((q) => q + 1)
    // }

    function handleAnswerSelection (option) {
        setUserAnswers((a) => [...a, {
            "id": questions[currentQuestionNumber].id,
            "userAnswer": option
         }])
         setCurrentQuestionNumber((q) => q + 1)

    }

    return (
    <>
        {isLoading ? 'Loading questions' : ''}
        {error ? `Error: ${error.message}` : ''}
        {questions[currentQuestionNumber]?.question}

        <div className="grid grid-cols-2 gap-4">
        {questions[currentQuestionNumber]?.options.map((option, index) => <button key={index} className="p-10 bg-stone-200 text-2xl" onClick={() => handleAnswerSelection(option)}>{option}</button>)}
        </div>

    </>
    )
}

export default CurrentQuestion