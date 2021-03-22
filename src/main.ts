import Phaser from 'phaser';

import Level1Scene from './scenes/Level1Scene';
import Level2Scene from './scenes/Level2Scene';
import PreloaderScene from './scenes/PreloaderScene';

const config: Phaser.Types.Core.GameConfig = {
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
  scene: [PreloaderScene, Level1Scene, Level2Scene],
};

export default new Phaser.Game(config);
