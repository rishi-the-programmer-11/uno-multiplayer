import { FC } from 'react'
import '../styles/menu.css'

interface MainMenuProps {
  onSelectGame: (gameName: string) => void
  onViewLeaderboard: () => void
}

const MainMenu: FC<MainMenuProps> = ({ onSelectGame, onViewLeaderboard }) => {
  const games = [
    { id: 'space-blaster', name: 'Space Blaster', description: 'Classic space shooter' },
    { id: 'brick-breaker', name: 'Brick Breaker', description: 'Retro paddle game' },
    { id: 'snake-rush', name: 'Snake Rush', description: 'Fast-paced snake game' },
    { id: 'pac-maze', name: 'Pac Maze', description: 'Maze navigation game' },
  ]

  return (
    <div className="main-menu">
      <div className="menu-header">
        <h1 className="arcade-title">RETRO ARCADE</h1>
        <p className="subtitle">~ CHOOSE YOUR GAME ~</p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <button
            key={game.id}
            className="game-card"
            onClick={() => onSelectGame(game.id)}
          >
            <div className="game-icon">🎮</div>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </button>
        ))}
      </div>

      <div className="menu-footer">
        <button className="btn btn-secondary" onClick={onViewLeaderboard}>
          👑 LEADERBOARD
        </button>
      </div>
    </div>
  )
}

export default MainMenu
