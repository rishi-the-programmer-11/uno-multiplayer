/**
 * Audio Manager
 * Handles sound effects and music playback
 */

type AudioType = 'sfx' | 'music'

interface AudioBuffer {
  url: string
  type: AudioType
  volume: number
}

class AudioManager {
  private audioContext: AudioContext
  private audioBuffers: Map<string, AudioBuffer> = new Map()
  private currentlyPlaying: Map<string, AudioBufferSourceNode> = new Map()
  private masterVolume = 1

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  }

  /**
   * Load an audio file
   */
  async loadAudio(id: string, url: string, type: AudioType = 'sfx'): Promise<void> {
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
      
      this.audioBuffers.set(id, {
        url,
        type,
        volume: 1
      })
    } catch (error) {
      console.error(`Failed to load audio: ${id}`, error)
    }
  }

  /**
   * Play a sound effect
   */
  playSFX(id: string, loop = false): void {
    this.playAudio(id, loop)
  }

  /**
   * Play background music
   */
  playMusic(id: string): void {
    // Stop any currently playing music
    this.audioBuffers.forEach((buffer, key) => {
      if (buffer.type === 'music') {
        this.stopAudio(key)
      }
    })
    this.playAudio(id, true)
  }

  /**
   * Internal play method
   */
  private playAudio(id: string, loop = false): void {
    if (!this.audioBuffers.has(id)) {
      console.warn(`Audio not found: ${id}`)
      return
    }

    try {
      const source = this.audioContext.createBufferSource()
      const gainNode = this.audioContext.createGain()
      
      source.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      gainNode.gain.value = this.masterVolume
      source.loop = loop
      
      this.currentlyPlaying.set(id, source)
    } catch (error) {
      console.error(`Failed to play audio: ${id}`, error)
    }
  }

  /**
   * Stop playing a sound
   */
  stopAudio(id: string): void {
    const source = this.currentlyPlaying.get(id)
    if (source) {
      source.stop()
      this.currentlyPlaying.delete(id)
    }
  }

  /**
   * Set master volume (0-1)
   */
  setVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume))
  }
}

export const audioManager = new AudioManager()
