/**
 * Game Engine Utilities
 * Core utilities for game logic, collision detection, and state management
 */

export interface GameState {
  score: number
  level: number
  health: number
  gameOver: boolean
  paused: boolean
}

export interface Position {
  x: number
  y: number
}

export interface Entity extends Position {
  width: number
  height: number
}

/**
 * Check collision between two entities using AABB (Axis-Aligned Bounding Box)
 */
export function checkCollision(entity1: Entity, entity2: Entity): boolean {
  return (
    entity1.x < entity2.x + entity2.width &&
    entity1.x + entity1.width > entity2.x &&
    entity1.y < entity2.y + entity2.height &&
    entity1.y + entity1.height > entity2.y
  )
}

/**
 * Calculate distance between two positions
 */
export function distance(pos1: Position, pos2: Position): number {
  const dx = pos2.x - pos1.x
  const dy = pos2.y - pos1.y
  return Math.sqrt(dx * dx + dy * dy)
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

/**
 * Generate random number between min and max
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
