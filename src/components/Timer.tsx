import { TimerProps } from "../types"

const Timer = ({page, nOfQuestions, time}: TimerProps) => {

  const inerBarStyles: object = {
    height: '100%',
    width: `${100 -((100 / 20) * time)}%`,
    backgroundColor: 'rgba(0, 200, 255)',
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out'
  }

  return (
    <div className="question-utils">
      <span>
        <h4>Time left: {time}sec</h4>
        <h4>{page + 1}/{nOfQuestions}</h4>
      </span>
      <div className="progress-bar">
        <div style={inerBarStyles} className="inner-bar"></div>
      </div>
    </div>
  )
}

export default Timer