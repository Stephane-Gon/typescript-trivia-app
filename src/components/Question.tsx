import { useState } from "react"
import { QuestionProps } from "../types"


const Question = ({ item, page, shuffled, setScore, setPage, setIsFinish, nOfQuestions, setTime, time }: QuestionProps ) => {
  const [userAnswer, setUserAnswer] = useState<string>('')
  
  const handleClick = (answer: string): void => {
    setUserAnswer(answer)
  }

  const handleNextQuestion = (): void => {
    setScore((prev) => ([...prev, {question : item.question, answer: userAnswer, time: 20 - time}]))
    setPage(prev => prev + 1)
    setTime(20)
    setUserAnswer('')
  }

  const handleIsFinish = () => {
    setScore((prev) => ([...prev, {question : item.question, answer: userAnswer, time: 20 - time}]))
    setIsFinish(true)
  }


  return (
    <div className="question">
      
      <h2><b className="bold">{page + 1}.</b> {item?.question}</h2>
      <ul className="answer-wrapper">
        {
          shuffled.map((answer , i) => {
            return (
              <h3 className={`answer ${userAnswer === answer ? 'active' : ''}`} key={i} onClick={() => handleClick(answer)}>
                <b className="bold">{i + 1}.</b> {answer}
              </h3>
            )
          })
        }
      </ul>

      <div className='question-btns'>
        {
          page + 1 === nOfQuestions ? (
            <button onClick={handleIsFinish} className="complete-btn">Check Score</button>
          ) : !userAnswer ? (
            <i className="fa-solid fa-arrow-right disabled"></i>
          ) : (
            <i onClick={handleNextQuestion} className="fa-solid fa-arrow-right"></i>
          )
        }
      </div>
      
    </div>
  )
}

export default Question