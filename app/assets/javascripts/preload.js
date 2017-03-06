var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		// this.game.load.image('tile', 'assets/tile.png');
		// this.game.load.image('player', 'assets/player.png');
    game.load.image('sky', '/assets/sky.png');
    game.load.image('ground', '/assets/platform.png');
    game.load.image('tile', '/assets/grassy.png')
    game.load.spritesheet('princess', '/assets/princess.png', 35, 56);
    game.load.spritesheet('frog', '/assets/frog.png', 35, 44);
	},

	create: function(){
		this.game.state.start("Main");
	}
}
