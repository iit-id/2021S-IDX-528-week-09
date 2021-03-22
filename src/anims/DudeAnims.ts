import Phaser from 'phaser';

export default function CreateDudeAnims(
  anims: Phaser.Animations.AnimationManager
) {
  //  Our player animations, turning, walking left and walking right.
  anims.create({
    key: 'left',
    frames: anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  });

  anims.create({
    key: 'right',
    frames: anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
}
