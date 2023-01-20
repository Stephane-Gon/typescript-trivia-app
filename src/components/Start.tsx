import { StartProps } from "../types"

import QuizzPrevDetails from "./QuizzPrevDetails"

const Start = ({ setStart }: StartProps) => {
  return (
    <>
      <h1 style={{zIndex : 2}} className="my-heading">Quizz App</h1>
      <QuizzPrevDetails />
      <button onClick={() => setStart(true)} className="start-btn">Start Quiz App</button>
    </>
  )
}

export default Start