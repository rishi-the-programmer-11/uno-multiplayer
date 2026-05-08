import { FC } from 'react'
import '../styles/leaderboard.css'

interface LeaderboardProps {
  onBack: () => void
}

const Leaderboard: FC<LeaderboardProps> = ({ onBack }) => {
  const mockLeaderboard = [
    { rank: 1, player: 'PIXEL_MASTER', score: 9850, game: 'Space Blaster' },
    { rank: 2, player: 'ARCADE_PRO', score: 8920, game: 'Brick Breaker' },
    { rank: 3, player: 'SNAKE_KING', score: 7650, game: 'Snake Rush' },
    { rank: 4, player: 'MAZE_RUNNER', score: 6543, game: 'Pac Maze' },
    { rank: 5, player: 'YOU', score: 5200, game: 'Space Blaster' },
  ]

  return (
    <div className="leaderboard-screen">
      <button className="btn-back" onClick={onBack}>← BACK</button>
      
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">👑 HALL OF FAME 👑</h1>
        
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>RANK</th>
              <th>PLAYER</th>
              <th>SCORE</th>
              <th>GAME</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaderboard.map((entry) => (
              <tr key={entry.rank} className={entry.rank <= 3 ? 'top-rank' : ''}>
                <td className="rank">{entry.rank}</td>
                <td className="player">{entry.player}</td>
                <td className="score">{entry.score.toLocaleString()}</td>
                <td className="game">{entry.game}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard
