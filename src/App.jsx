
import { useState } from 'react'
import './App.css'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay'

function App() {

  const [isgameStarted,setisgameStarted]=useState(false)

  const toggleGamePlay=()=>{
    setisgameStarted((prev)=>!prev)
  }

  return (
    <>

{
  isgameStarted?<GamePlay/>:<StartGame  toggle={toggleGamePlay}/>
}
</>
  )
}

export default App



