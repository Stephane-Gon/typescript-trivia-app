import { PrevDetailProps, Game, BestCorrect, LocalUnion } from "../types"

const PrevDetail = ({ text, type }: PrevDetailProps) => {
  
  //* Here I calculate the best time
  let arrayOfTimes: number[] = []
  let bestTime: number = 20
  let allGamesTimes: LocalUnion = window.localStorage.getItem("allGamesTimes")
  if(allGamesTimes) {
    arrayOfTimes = JSON.parse(allGamesTimes)
    bestTime = Math.min(...arrayOfTimes)
  }

  //* Here I calculate most correct answer's
  let arrayOfMostCorrect: string[] = []
  let allBestCorrect: LocalUnion = window.localStorage.getItem("mostCorrectAwnsers")
  let bestCorrect: BestCorrect
  if(allBestCorrect) {
    arrayOfMostCorrect = JSON.parse(allBestCorrect)
    let splitedArray: BestCorrect[] = arrayOfMostCorrect.map((s) => s.split("/")).map((s) => (
      {
        percentage: (parseInt(s[0]) / parseInt(s[1])) * 100,
        correctAnswers: `${s[0]}/${s[1]}`
      }
    ))
    bestCorrect = splitedArray.reduce((prev, curr) => prev.percentage > curr.percentage ? prev : curr)
  }

  //* Here I get the prev score
  let prevScoreString: LocalUnion = window.localStorage.getItem("prevScore")
  let prevScore: Game
  if(prevScoreString) prevScore = JSON.parse(prevScoreString)

  //* Here I get the best score overall
  let bestGameString: LocalUnion = window.localStorage.getItem("bestGame")
  let bestGame: Game
  if(bestGameString) bestGame = JSON.parse(bestGameString)  


  let content: JSX.Element = <h3></h3>
  switch (type) {
    case 'time':
      content = <h3>{ arrayOfTimes.length !== 0 ? `${bestTime}sec` : "No games Made" } </h3>
      break;
    case 'answers':
      content = (
        <h3>
          { arrayOfMostCorrect.length !== 0 ? `${bestCorrect?.correctAnswers} or ${bestCorrect?.percentage} %` : "No games Made" } 
          
        </h3>
      )
      break;
    case 'best': 
      content = (
        !bestGameString ? (
          <h3>No games Made</h3>
        ) : (
          <>
            <p><b>Time:</b> { bestGame?.percentageOfTime}sec</p>
            <p><b>Corrrect A:</b> { bestGame?.nOfCorrectA}</p>
            <p><b>Percentage:</b> { bestGame?.percentageOfCorrectA}%</p>
            <p><b>Unanswered:</b> { bestGame?.unansweredQuestions}</p>

          </>
        )
      )
      break;
    case 'prev':
      content = (
        !prevScoreString ? (
          <h3>No games Made</h3>
        ) : (
          <>
            <p><b>Time:</b> { prevScore?.percentageOfTime}sec</p>
            <p><b>Corrrect A:</b> { prevScore?.nOfCorrectA}</p>
            <p><b>Percentage:</b> { prevScore?.percentageOfCorrectA}%</p>
            <p><b>Unanswered:</b> { prevScore?.unansweredQuestions}</p>

          </>
        )
      )
      break;
    
    default:
      console.log(`No type specified!`)
  }

  return (
    <div>
      <p>{text}</p>
      { content }
    </div>
  )
}

export default PrevDetail