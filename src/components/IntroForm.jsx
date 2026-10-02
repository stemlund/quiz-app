import { useState, useContext } from 'react'
import { QuizContext } from '../QuizContext'

const questions = [
    {id: 1, text: "What is your name?", type: "text"},
    {id: 2, text: "Pick a subject!", options: ['Math', 'History'], type: "select"},
    {id: 3, text: "Pick a difficulty!", options: ['easy', 'medium', 'hard'], type: "select"},
]



function IntroForm() {
    const {name, setName, introAnswers, setIntroAnswers } = useContext(QuizContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentQuestion = questions[currentIndex]

    function renderQuestion(q) {

        switch (q.type) {
            case "text":
                return (
                    <>
                        <label htmlFor={q.id}>{q.text}</label>
                        <input value={introAnswers[q.id] ? introAnswers[q.id] : ''} onChange={(e) => setIntroAnswers((prev) => ({...prev, [q.id]: e.target.value}))} id={q.id} />
                    </>
                )
            case "select":
                return (
                    <>
                        {q.text}
                        <div>
                            {q.options.map((o) => (
                                <>
                                <input id={o} type="radio" name={q.id} onChange={(e) => setIntroAnswers((prev) => ({...prev, [q.id]: o}))} />
                                <label htmlFor={o}>{o}</label>
                                </>
                            ))}
                            
                        </div>
                    </>
                )

        }

         
    }

    function handleAnswer() {

        if(currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1)
        }
        
    }

    return (
        <>   
            Question {currentIndex + 1} of {questions.length}

            <div>
                {renderQuestion(currentQuestion)}
            </div>

            {currentIndex !== 0 && currentIndex < questions.length ? <button onClick={() => setCurrentIndex((prev) => prev - 1)}>Previous</button> : ''}

            {currentIndex < questions.length - 1 ? <button onClick={handleAnswer}>Next</button> : <button>Let's Go {name}</button>}

            <p>{JSON.stringify(introAnswers)}</p>
            
        </>
    )
}

export default IntroForm