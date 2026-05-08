# Retro Arcade Platform

A polished, nostalgic arcade gaming platform featuring pixel art, CRT effects, and classic arcade sounds.

## Features

- 🎮 **Multiple Mini-Games**: A collection of fun, arcade-style games
- 🏆 **Global Leaderboard**: Compete with other players and climb the rankings
- 🎨 **Pixel Art**: Beautiful 8-bit and 16-bit style graphics
- 📺 **CRT Effects**: Authentic retro monitor aesthetic with scanlines and glow
- 🔊 **Arcade Sounds**: Authentic beeps, boops, and chiptune music

## Project Structure

```
uno-multiplayer/
├── src/
│   ├── games/           # Game logic and implementations
│   ├── components/      # Reusable UI components
│   ├── effects/         # CRT and visual effects
│   ├── audio/          # Sound effects and music management
│   ├── leaderboard/    # Leaderboard system
│   └── utils/          # Utility functions
├── assets/
│   ├── sprites/        # Pixel art graphics
│   ├── sounds/         # Audio files
│   └── fonts/          # Retro fonts
├── tests/              # Test suites
└── docs/               # Documentation
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play in your browser.

### Build

```bash
npm run build
```

## Games

- **Space Blaster**: Classic space shooter
- **Brick Breaker**: Retro paddle game
- **Snake Rush**: Fast-paced snake game
- **Pac Maze**: Maze navigation game

## Leaderboard

Scores are tracked globally and updated in real-time. Check your rank and compete with friends!

## Technologies

- **Frontend**: React/Vue (TBD)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL/MongoDB
- **Graphics**: Canvas API + Pixi.js
- **Audio**: Web Audio API

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Roadmap

- [ ] Core game engine
- [ ] First 4 mini-games
- [ ] Leaderboard system
- [ ] CRT effects
- [ ] Audio system
- [ ] Mobile optimization
- [ ] Multiplayer support
