import { useState, useCallback } from 'react'
import type { GameState } from '../utils/gameEngine'

const initialState: GameState = {
  score: 0,
  level: 1,
  health: 3,
  gameOver: false,
  paused: false,
}

export function useGameState() {
  const [state, setState] = useState<GameState>(initialState)

  const addScore = useCallback((points: number) => {
    setState((prev) => ({
      ...prev,
      score: prev.score + points,
    }))
  }, [])

  const loseHealth = useCallback((damage: number = 1) => {
    setState((prev) => {
      const newHealth = Math.max(0, prev.health - damage)
      return {
        ...prev,
        health: newHealth,
        gameOver: newHealth <= 0,
      }
    })
  }, [])

  const nextLevel = useCallback(() => {
    setState((prev) => ({
      ...prev,
      level: prev.level + 1,
    }))
  }, [])

  const togglePause = useCallback(() => {
    setState((prev) => ({
      ...prev,
      paused: !prev.paused,
    }))
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  return {
    state,
    addScore,
    loseHealth,
    nextLevel,
    togglePause,
    reset,
  }
}
