import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import GameScreen from './components/GameScreen'
import Leaderboard from './components/Leaderboard'

type Screen = 'menu' | 'game' | 'leaderboard'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu')
  const [selectedGame, setSelectedGame] = useState<string>('')

  const handleSelectGame = (gameName: string) => {
    setSelectedGame(gameName)
    setCurrentScreen('game')
  }

  const handleBackToMenu = () => {
    setCurrentScreen('menu')
    setSelectedGame('')
  }

  const handleViewLeaderboard = () => {
    setCurrentScreen('leaderboard')
  }

  return (
    <div className="app crt-screen">
      {currentScreen === 'menu' && (
        <MainMenu 
          onSelectGame={handleSelectGame}
          onViewLeaderboard={handleViewLeaderboard}
        />
      )}
      {currentScreen === 'game' && (
        <GameScreen 
          gameName={selectedGame}
          onBack={handleBackToMenu}
        />
      )}
      {currentScreen === 'leaderboard' && (
        <Leaderboard onBack={handleBackToMenu} />
      )}
    </div>
  )
}

export default App
