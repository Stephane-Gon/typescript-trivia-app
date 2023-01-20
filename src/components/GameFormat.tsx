import { useState, useEffect } from 'react'
import { QuestionType, DetailsState } from '../types';

import Questions from './Questions';
import Input from './Input';

const GameFormat = () => {
  const [start, setStart] = useState<boolean>(false)
  const [data, setData] = useState<QuestionType[]>([])
  const [details, setDetails] = useState<DetailsState>({
    limit: 20,
    difficulty: 'medium',
    category: 'geography'
  })

  const url: string = `https://the-trivia-api.com/api/questions?categories=${details.category}&limit=${details.limit}&${details.difficulty}=medium`

  useEffect(() => {
    console.log('Api call')
    const api = async (url: string) => {
      const data = await fetch(url, {
        method: "GET"
      })
      const jsonData = await data.json()
      setData(jsonData)
    }
    api(url)
  }, [start])

  const handleClick = (e: any):void => {
    setDetails((prev) => ({...prev, [e.target.name]: e.target.value.toLowerCase().replaceAll(' ', '_')}))
  }

  const handleChange = (e: any): void => {
    setDetails((prev) => ({...prev, [e.target.name]: e.target.value.toLowerCase()}))
  }

  console.log(details)
  return (
    <div className='wrapper'>
      {
        start ? (
          <Questions data={data} />
        ) : (
          <>
            <h1 style={{zIndex : 2}} className="my-heading">Modify your quiz game!</h1>
            <div className='modify-box'>
              <h3>Choose difficulty:</h3>
              <div className='values-box'>
                <Input value="easy" name="difficulty" details={details} handleClick={handleClick} />
                <Input value="medium" name="difficulty" details={details} handleClick={handleClick} />
                <Input value="hard" name="difficulty" details={details} handleClick={handleClick} />
              </div>

              <h3 style={{marginTop: "70px"}}>Choose number of questions:</h3>
              <div className='values-box'>
                <input className='range-input' type="range" min={5} max={20} step={5} name="limit" onChange={handleChange} />
                <label className='my-label' htmlFor='limit'>{details.limit} questions</label>
              </div>

              <h3>Choose category:</h3>
              <div className='values-box'>
                <Input value="geography" name="category" details={details} handleClick={handleClick} />
                <Input value="film_and_tv" name="category" details={details} handleClick={handleClick} />
                <Input value="general_knowledge" name="category" details={details} handleClick={handleClick} />
                <Input value="music" name="category" details={details} handleClick={handleClick} />
                <Input value="science" name="category" details={details} handleClick={handleClick} />
                <Input value="sport_and_leisure" name="general_knowledge" details={details} handleClick={handleClick} />
                <Input value="arts_and_literature" name="category" details={details} handleClick={handleClick} />
                <Input value="food_and_drink" name="category" details={details} handleClick={handleClick} />
                <Input value="history" name="general_knowledge" details={details} handleClick={handleClick} />
              </div>

            </div>
            <button onClick={() => setStart(true)} className="start-btn">Start</button>
          </>
        )
      }
    </div>
  )
}

export default GameFormat