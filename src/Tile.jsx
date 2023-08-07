import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import GameStore from './GameStore'

const Tile = observer(({type}) => {
    const gameStore = useContext(GameStore)
    const {cellSize, cellGap, targetX, targetY, robotX, robotY, robotDirection} = gameStore
    const x = type === "target" ? targetX : robotX
    const y = type === "target" ? targetY : robotY

    return (
        <div className="tile" style={{top: `calc(${y} * (${cellSize}vmin + ${cellGap}vmin) + ${cellGap}vmin)`, left: `calc(${x} * (${cellSize}vmin + ${cellGap}vmin) + ${cellGap}vmin)`}}>
            {type === "target" ? <img style={{height: '90%', width:'90%'}} src='../public/target.svg'/> : <img style={{height: '90%', width:'90%', rotate:`${robotDirection}deg`, zIndex:2}} src='../public/direction.svg'/>}
        </div>
    )
})

export default Tile