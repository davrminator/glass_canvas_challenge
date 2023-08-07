import { useContext } from 'react'
import './styles.css'
import { observer } from 'mobx-react-lite'
import GameStore from './GameStore'
import Tile from './Tile'

const App = observer(() => {
  const gameStore = useContext(GameStore)
  const {rowSize, columnSize, cellSize, cellGap} = gameStore

  document.documentElement.style.setProperty("--row-size", rowSize)
  document.documentElement.style.setProperty("--column-size", columnSize)
  document.documentElement.style.setProperty("--cell-size", `${cellSize}vmin`)
  document.documentElement.style.setProperty("--cell-gap", `${cellGap}vmin`)

  // document.documentElement.style.setProperty("--y", 0)
  // document.documentElement.style.setProperty("--x", 0)

  const allCells = Array.from({length: rowSize * columnSize}, (_, index) => {
    return <div className="cell" key={index}></div>;
  });

  // const [todos, setTodos] = useState(() => {
  //   const currentTodos = localStorage.getItem("ITEMS")
  //   if (currentTodos === null) return []
  //   return JSON.parse(currentTodos)
  // })

  // useEffect(() => {
  //   localStorage.setItem("ITEMS", JSON.stringify(todos))
  // }, [todos])

  // const addTodo = (title) => {    
  //   setTodos((prev) => {
  //     return [...prev, {id: crypto.randomUUID(), title, completed: false}]
  //   })
  // }

  // const toggleTodo = (id, completed) => {
  //   setTodos(prev => {
  //     return prev.map(todo => {
  //       if (todo.id === id){
  //         return {...todo, completed}
  //       }
  //       return todo
  //     })
  //   })
  // }
  
  // const deleteTodos = (id) => {
  //   setTodos((prev) => {
  //     return prev.filter(todo => todo.id !== id)
  //   })
  // }

  // return (
  //   <>
  //     <NewToDoForm onSubmit={addTodo}/>
  //     <h1 className='header'>Todo List</h1>
  //     <ToDoList/>
  //     {/* <ToDoList todos={todoInstance.todos} toggleTodo={todoInstance.toggleTodo} deleteTodos={deleteTodos}/> */}
  //   </>
  //   )
  return (
    <div id="game-board">
      {allCells}
      <Tile type="robot"/>
      <Tile type="target"/>
    </div>
  )
})

export default App