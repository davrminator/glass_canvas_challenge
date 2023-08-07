import { useContext, useEffect, useState, useRef } from 'react'
import './styles.css'
import { observer } from 'mobx-react-lite' //mobx-react or mobx-react-lite both works fine!!!!
import GameStore from './GameStore'

const Header = observer(() => {
  const gameStore = useContext(GameStore)
  const {score, gameOver, isGameOver, timerInSeconds} = gameStore
  const [countdown, setCountdown] = useState(timerInSeconds)
  const timerId = useRef()

  useEffect(() => {
    setCountdown(timerInSeconds)
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    return () => {clearInterval(timerId.current)}
  }, [isGameOver])

  useEffect(() => {
    if (countdown <= 0){
      clearInterval(timerId.current)
      gameOver()
    }
  }, [countdown])
  
  return (
    <div style={{marginTop: "30px", display:"flex", justifyContent:"space-between"}}>
      <p style={{fontSize: "30px", color:"white"}}>Score: {score}</p>
      <p style={{fontSize: "30px", color:"white"}}>Time: {countdown}</p>
    </div>
  )
})

export default Header