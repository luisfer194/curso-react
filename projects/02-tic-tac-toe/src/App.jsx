import { useState } from 'react'
import './App.css'
const TURS = {
  X: '❌',
  O: '⭕'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handClick} className={className}>
      {children}
    </div>
  )
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn === TURS.X ? TURS.O : TURS.X
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURS.X}>{TURS.X}</Square>
        <Square isSelected={turn === TURS.O}>{TURS.O}</Square>
      </section>
    </main>
  )
}

export default App
