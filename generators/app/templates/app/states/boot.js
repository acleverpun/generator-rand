import config from '../config';
import State from './state';

class Boot extends State {
	create() {
		// initial background
		this.stage.backgroundColor = '#000000';

		// scaling
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// centering
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// automatically set screen size
		this.scale.setScreenSize(true);

		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// load the game state, with the default map
		this.state.start('load', true, false, {
			mapId: config.mapId
		});
	}
}

export default Boot;
