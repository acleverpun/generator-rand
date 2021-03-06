import config from './config';
import states from './states';

let game = new Phaser.Game(config.width, config.height, config.renderer, config.name);

// TODO: remove
window.game = game;

// states
game.state.add('boot', states.Boot);
game.state.add('load', states.Load);
game.state.add('game', states.Game);

game.state.start('boot');

export default game;
