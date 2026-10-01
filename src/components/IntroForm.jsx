import { useState, useContext } from 'react'
import { QuizContext } from '../QuizContext'

const questions = [
    {id: 1, text: "What is your name?", type: "text"},
    {id: 2, text: "Pick a subject!", options: ['Math', 'History'], type: "select"},
    {id: 2, text: "Pick a difficulty!", options: ['easy', 'medium', 'hard'], type: "select"},
]



function IntroForm() {
    const {name, setName, introAnswers, setIntroAnswers } = useContext(QuizContext)
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleAnswer() {

        if(currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1)
        }
        
    }

    return (
        <>   
            Question {currentIndex + 1} of {questions.length}

            {currentIndex < questions.length - 1 ? <button onClick={handleAnswer}>Next</button> : <button>Let's Go {name}</button>}
            
        </>
    )
}

export default IntroForm