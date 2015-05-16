import State from './state';

class Load extends State {
	init(spawnLocation) {
		this.spawnLocation = spawnLocation;
	}

	preload() {}

	create() {
		// start
		this.state.start('game', true, false, this.spawnLocation);
	}
}

export default Load;
