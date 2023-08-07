import { useContext } from 'react'
import './styles.css'
import { observer } from 'mobx-react-lite' //mobx-react or mobx-react-lite both works fine!!!!
import GameStore from './GameStore'

const Controls = observer(() => {
  const gameStore = useContext(GameStore)
  const {rotateRobot, moveForward} = gameStore
  
  return (
    <div style={{display:"flex", justifyContent:"center", margin: "30px 0px"}}>
      <button onClick={() => rotateRobot(-90)}><img src="/public/circular-arrow.svg" style={{height:'30px', width:'30px', padding: '5px'}}/></button>
      <button style={{margin:"0px 15px"}} onClick={() => moveForward()}><img src="/public/direction.svg" style={{height:'40px', width:'40px', padding: '5px'}}/></button>
      <button onClick={() => rotateRobot(90)}><img src="/public/circular-arrow.svg" style={{transform:`scaleX(-1)`, height:'30px', width:'30px', padding: '5px'}}/></button>
    </div>
  )
})

export default Controls