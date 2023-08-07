import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import GameStore from './GameStore'

const GameOver = observer(() => {
    const gameStore = useContext(GameStore)
    const {isGameOver, leaderBoard, playAgain} = gameStore

    return (
        <div className="gameOver" style={{background:"lightBlue",
            position:"absolute",
            top:"0px",
            right:"0px",
            bottom:"0px",
            left:"0px",
            zIndex:10,
            display:"flex",
            flexDirection:"column",
            alignItems:'center',
            justifyContent:"center",
            visibility: isGameOver ? "visible" : "hidden",
            overflow: "scroll",
            }}>
            Leaderboard:
            <hr style={{border: "solid 2px black", width: "50%", margin: 0}}/>
            <div>
                {leaderBoard.slice(0, 10).map((data) => {
                    return (<div key={data.gameNumber}>
                            <p style={{fontSize:"20px", marginBottom: "5px"}} key={`${data.gameNumber}-score`}>Game <strong>{data.gameNumber}</strong> by <strong>{data.user}</strong> scored: <strong>{data.score}</strong></p>
                            <hr style={{border: "solid 2px black", margin: 0}} key={`${data.gameNumber}-line`}/>
                        </div>)
                })}
                <button onClick={() => playAgain()} style={{position:"absolute", left: "45%", marginTop: "10px"}}>play again</button>
            </div>
        </div>
    )
})

export default GameOver