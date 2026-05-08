import { FC } from 'react'
import '../styles/game.css'

interface GameScreenProps {
  gameName: string
  onBack: () => void
}

const GameScreen: FC<GameScreenProps> = ({ gameName, onBack }) => {
  return (
    <div className="game-screen">
      <div className="game-header">
        <button className="btn-back" onClick={onBack}>← BACK</button>
        <h1>{gameName.replace('-', ' ').toUpperCase()}</h1>
        <div className="score-display">Score: 0</div>
      </div>

      <div className="game-canvas-container">
        <canvas id="game-canvas" className="game-canvas"></canvas>
        <div className="placeholder">Game Coming Soon...</div>
      </div>

      <div className="game-info">
        <p>Use arrow keys or WASD to move • SPACE to shoot/action</p>
      </div>
    </div>
  )
}

export default GameScreen
