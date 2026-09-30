import { useContext } from 'react'
import { QuizContext } from '../QuizContext'

const questions = [
    {id: 1, text: "What is your name?", type: "text"},
    {id: 2, text: "Pick a subject!", options: ['Math', 'History'], type: "select"},
    {id: 2, text: "Pick a difficulty!", options: ['easy', 'medium', 'hard'], type: "select"},
]

function IntroForm() {
    const {name, setName} = useContext(QuizContext)
    return (
        <>   
            Total Questions: {questions.length}
        </>
    )
}

export default IntroForm