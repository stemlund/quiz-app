import { useContext } from "react";
import { QuizContext } from '../QuizContext'


function CurrentQuestion() {

    const {name, setName, questions, setQuestions, filteredQuestions, setFilteredQuestions, currentQuestionNumber, setCurrentQuestionNumber, setUserAnswers, isLoading, setIsLoading, error, setError} = useContext(QuizContext)

    // function handleQuestionChange () {
    // setCurrentQuestionNumber((q) => q + 1)
    // }

    function handleAnswerSelection (option) {
        setUserAnswers((a) => [...a, {
            "id": filteredQuestions[currentQuestionNumber].id,
            "userAnswer": option
         }])
         setCurrentQuestionNumber((q) => q + 1)

    }
    console.log(filteredQuestions[currentQuestionNumber])

    return (
    <>
        {isLoading ? 'Loading questions' : ''}
        {error ? `Error: ${error.message}` : ''}
        
        Question {currentQuestionNumber + 1} of {filteredQuestions.length}

        {filteredQuestions[currentQuestionNumber]?.question}

        <div className="grid grid-cols-2 gap-4">
        {filteredQuestions[currentQuestionNumber]?.options.map((option, index) => <button key={index} className="p-10 bg-stone-200 text-2xl" onClick={() => handleAnswerSelection(option)}>{option}</button>)}
        </div>

        Need a hint? {filteredQuestions[currentQuestionNumber]?.hint}

    </>
    )
}

export default CurrentQuestion