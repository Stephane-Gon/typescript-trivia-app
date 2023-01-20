import { useState, useEffect } from 'react';
import { QuestionsProps, Scores } from '../types';

import Question from './Question';
import ScoreResult from './ScoreResult';
import Timer from './Timer';

// const url: string = 'https://the-trivia-api.com/api/questions?categories=geography&limit=10&difficulty=medium'


const Questions = ({ data }: QuestionsProps): JSX.Element => {
  // const [data, setData] = useState<QuestionType[]>([])
  const [page, setPage] = useState<number>(0)
  const [score, setScore] = useState<Scores[]>([])
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [time, setTime] = useState<number>(20)
  const [shuffled, setShuffled] = useState<string[]>([])

  useEffect(() => {

    if(isFinish !== true) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
  
      if(time <= 0 && score.length < 5) {
        setScore((prev) => ([
          ...prev, 
          {
            question : data[page].question, answer: 
            'You gave no Answer!', 
            time: 20 - time
          }
        ]))
      }
      
      if(time <= 0 && page + 1 === data.length) {
        setIsFinish(true)
      } else if(time <= 0 && page + 1 !== data.length) {
        setPage((prev) => prev + 1)
        setTime(20)
      }
  
      return () => clearInterval(interval);
    }
    
  }, [time])

  // useEffect(() => {
  //   const api = async (url: string) => {
  //     const data = await fetch(url, {
  //       method: "GET"
  //     })
  //     const jsonData = await data.json()
  //     setData(jsonData)
  //   }
  //   api(url)
  // }, [])
  
  useEffect(() => {
    if(data[page]?.correctAnswer, data[page]?.incorrectAnswers) {
      setShuffled([data[page].correctAnswer, ...data[page].incorrectAnswers].sort(() => {
        return Math.random() - 0.5
      }))
    }
  }, [page, data])
  


  return (
    <div className='wrapper'>
      {
        isFinish ? (
          <ScoreResult score={score} data={data} />
        ) : (
          <>
            <Timer page={page} nOfQuestions={data.length} time={time}/>
      
            { data && (
              <Question 
                shuffled={shuffled} 
                item={data[page]} 
                page={page} 
                setPage={setPage}
                setScore={setScore} 
                setIsFinish={setIsFinish}
                nOfQuestions={data.length}
                setTime={setTime}
                time={time}
              />
            )}
          </>
        )
      }
    </div>
  )
}

export default Questions