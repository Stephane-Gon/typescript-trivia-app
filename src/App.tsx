import { useState } from "react"

import GameFormat from "./components/GameFormat"
import Start from "./components/Start"

function App() {
  const [start, setStart] = useState<boolean>(false)

  return (
    <div className="app">
      <div className="waves-base"></div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(179, 221, 255)" fillOpacity="1" d="M0,160L21.8,144C43.6,128,87,96,131,69.3C174.5,43,218,21,262,10.7C305.5,0,349,0,393,32C436.4,64,480,128,524,160C567.3,192,611,192,655,192C698.2,192,742,192,785,176C829.1,160,873,128,916,112C960,96,1004,96,1047,106.7C1090.9,117,1135,139,1178,149.3C1221.8,160,1265,160,1309,138.7C1352.7,117,1396,75,1418,53.3L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
        </path>
      </svg>
      { start ? <GameFormat /> : <Start setStart={setStart} />}
    </div>
  )
}

export default App
