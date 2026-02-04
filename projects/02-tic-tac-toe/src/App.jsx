import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'

import { TURS } from './constants.js'
import { checkwinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Tablero } from './components/Tablero.jsx'
import { saveGame, resetGameStorage } from './logic/storage/index.js'


function App() {
  console.log("Renderizando App")

  const [board, setBoard] = useState(() => {
    console.log("Inicializando estado del board")
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURS.X
  })
  //null no hay ganador, false empate, true hay ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambiar el turno
    const newTurn = turn === TURS.X ? TURS.O : TURS.X
    setTurn(newTurn)

    //Guardar partida
    saveGame({ board: newBoard, turn: newTurn })

    //Revisar si hay ganador
    const newWinner = checkwinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }



  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear juego</button>

      <Tablero board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURS.X}>{TURS.X}</Square>
        <Square isSelected={turn === TURS.O}>{TURS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
