import { useState } from "react";

import { ShowState } from "../types";
import PrevDetail from "./PrevDetail";

const QuizzPrevDetails = () => {
  const [show, setShow] = useState<ShowState>({
    time: false,
    answers: false,
    prev: false,
    best: false
  })

  return (
    <div className="prev-details">
      <div onClick={() => setShow((prev) => ({...prev, best: !prev.best}))} className="prev-detail">
        {
          show.best ? (
            <PrevDetail 
              text="Best game by correct answers:" 
              type="best"
            />
          ) : (
            <>
              <i className="fa-solid fa-trophy"></i>
              <h3>Best Game overall</h3>
            </>
          )
        }
      </div>

      <div onClick={() => setShow((prev) => ({...prev, time: !prev.time}))} className="prev-detail">
        {
          show.time ? (
            <PrevDetail 
              text="The best percentage of time spent in all questions of a game was:" 
              type="time"
            />
          ) : (
            <>
              <i className="fa-solid fa-clock"></i>
              <h3>Best time percentage in a game</h3>
            </>
          )
        }
      </div>

      <div onClick={() => setShow((prev) => ({...prev, answers: !prev.answers}))} className="prev-detail">
      {
          show.answers ? (
            <PrevDetail 
              text="The most awnser's correct in a game by percentage was:" 
              type="answers"
            />
          ) : (
            <>
              <i className="fa-regular fa-star"></i>
              <h3>Most correct answer's in a game</h3>
            </>
          )
        }
      </div>

      <div onClick={() => setShow((prev) => ({...prev, prev: !prev.prev}))} className="prev-detail">
        {
          show.prev ? (
            <PrevDetail 
              text="Your previous score was:" 
              type="prev"
            />
          ) : (
            <>
              <i className="fa-regular fa-calendar"></i>
              <h3>Previous Score</h3>
            </>
          )
        }
      </div>
    </div>
  )
}

export default QuizzPrevDetails