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
		game.load.spritesheet('puzzle', '/assets/puzzle.png', 200, 200);
		game.load.spritesheet('baguette', '/assets/baguette.png', 105, 120 );
		game.load.image('apple', '/assets/apple.png');
		game.load.image('hedgehog', '/assets/hedgehog_body.png');
		game.load.image('emerald', '/assets/ore_emerald.png');
		game.load.image('fish', '/assets/fish_cooked.png');
		game.load.image('gold', '/assets/ore_gold.png');
		game.load.image('mushroom', '/assets/mushroom_red.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}
