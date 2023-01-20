import { ScoreResultProps } from "../types"

const ScoreQuestionResult = ({myScore, qData, setQuestionN, questionN, nOfQuestions}: ScoreResultProps) => {

  let dynamicStyle: object = {
    color: `${myScore.answer === qData.correctAnswer ? "rgb(17, 175, 109)" : "red"}`
  }
  
  return (
    <div className="question-review">
      <h4>Question {questionN + 1} of {nOfQuestions}</h4>
      <h2>{ myScore.question }</h2>

      <h4>Your answer was: <b style={dynamicStyle}>{myScore.answer}</b></h4>
      <h4>The Correct awnser was: <b style={{color: "rgb(17, 175, 109)"}}>{qData.correctAnswer}</b></h4>
      
      <div className="review-utils">
        {
          questionN === 0 ? (
            <i className="fa-solid fa-arrow-left disabled"></i>
          ) : (
            <i onClick={() => setQuestionN(prev => prev -1)} className="fa-solid fa-arrow-left"></i>
          )
        }
        {
          questionN + 1 === nOfQuestions ? (
            <i className="fa-solid fa-arrow-right disabled"></i>
          ) : (
            <i onClick={() => setQuestionN(prev => prev +1 )} className="fa-solid fa-arrow-right"></i>
          )
        }
      </div>
    </div>
  )
}

export default ScoreQuestionResult