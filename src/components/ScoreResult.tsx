import { useState, useEffect } from "react"
import { ScoreProps, Game } from "../types"

import ScoreQuestionResult from "./ScoreQuestionResult"

const ScoreResult = ({ score, data }: ScoreProps) => {
  const [questionN, setQuestionN] = useState<number>(0)

  // Correct answer's
  let nOfCorrectA: number = 0
  score.forEach((s, i) => {
    if(s.answer === data[i].correctAnswer) nOfCorrectA++
  })

  // Percentage of correct answer's
  let percentageOfCorrectA: number = (nOfCorrectA / data.length) * 100

  // Unanswered questions
  let unansweredQuestions: number = 0
  score.forEach((s) => {
    if(s.answer === 'You gave no Answer!') unansweredQuestions++
  })
  
  // Percentage of time
  let allSecs: number[] = score.map(s => (s.time))
  let totalNumberOfSecs: number = allSecs.reduce((partialSum, a) => partialSum + a, 0)
  let percentageOfTime: number = (totalNumberOfSecs / data.length)


  // Here I add values to local storage
  useEffect(() => {
    let allGamesTimes: string | null = window.localStorage.getItem("allGamesTimes") 
    if(allGamesTimes) {
      let arrayOfTime: number[] = JSON.parse(allGamesTimes)
      if(!arrayOfTime.includes(percentageOfTime)) {
        window.localStorage.setItem("allGamesTimes", JSON.stringify([...arrayOfTime, percentageOfTime]))
      }
    } else {
     window.localStorage.setItem("allGamesTimes", JSON.stringify([percentageOfTime]))
    }

    let allBestAwnsers: string | null = window.localStorage.getItem("mostCorrectAwnsers")
    if(allBestAwnsers) {
      let arrayOfBest: string[] = JSON.parse(allBestAwnsers)
      if(!arrayOfBest.includes(`${nOfCorrectA}/${data.length}`)) {
        window.localStorage.setItem("mostCorrectAwnsers", JSON.stringify([...arrayOfBest, `${nOfCorrectA}/${data.length}`]))
      }
    } else {
      window.localStorage.setItem("mostCorrectAwnsers", JSON.stringify([`${nOfCorrectA}/${data.length}`]))
    }

    window.localStorage.setItem("prevScore", JSON.stringify({
      nOfCorrectA: `${nOfCorrectA}/${data.length}`,
      unansweredQuestions: `${unansweredQuestions}/${data.length}`,
      percentageOfCorrectA,
      percentageOfTime
    }))

    let bestGameString: string | null = window.localStorage.getItem("bestGame")
    if(bestGameString) {
      let bestGame: Game = JSON.parse(bestGameString)
      if(bestGame.percentageOfCorrectA < percentageOfCorrectA) {
        window.localStorage.setItem("bestGame", JSON.stringify({
          nOfCorrectA: `${nOfCorrectA}/${data.length}`,
          unansweredQuestions: `${unansweredQuestions}/${data.length}`,
          percentageOfCorrectA,
          percentageOfTime
        }))
      }
    } else {
      window.localStorage.setItem("bestGame", JSON.stringify({
        nOfCorrectA: `${nOfCorrectA}/${data.length}`,
        unansweredQuestions: `${unansweredQuestions}/${data.length}`,
        percentageOfCorrectA,
        percentageOfTime
      }))
    }
  }, [])

  return (
    <div className="wrapper">
      <h1 className="my-heading">Your score was:</h1>
      <div className="score-details">
        <div className="details">
          <h3>Score:</h3>
          <span className="details-divider">
            <i className="fa-regular fa-star"></i>
            <p>{nOfCorrectA}/{data.length}</p>
          </span>
        </div>
        <div className="details">
          <h3>Correct answer's in %:</h3>
          <span className="details-divider">
            <i className="fa-solid fa-percent"></i>
            <p>{percentageOfCorrectA}</p>
          </span>
        </div>
        <div className="details">
          <h3>Time per question in %:</h3>
          <span className="details-divider">
            <i className="fa-sharp fa-solid fa-clock"></i>
            <p>{percentageOfTime}sec</p>
          </span>
        </div>
        <div className="details">
          <h3>Unanswered:</h3>
          <span className="details-divider">
            <i className="fa-regular fa-note-sticky"></i>
            <p>{unansweredQuestions}/{data.length}</p>
          </span>
        </div>
      </div>

      <ScoreQuestionResult 
        myScore={score[questionN]} 
        qData={data[questionN]} 
        setQuestionN={setQuestionN}
        questionN={questionN}
        nOfQuestions={data.length}
      /> 
      <button onClick={() => location.reload()} className="start-btn"> Reset </button>
   
    </div>
  )
}

export default ScoreResult