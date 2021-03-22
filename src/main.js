import Preloader from './scenes/preloader.js';
import Level1 from './scenes/level-1.js';
import Level2 from './scenes/level-2.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Preloader, Level1, Level2],
};

const game = new Phaser.Game(config);
