var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
		var me = this;
		game.add.sprite(0, 0, 'title');

		// me.setTimeout(startGame, 5000);
		game.time.events.add(Phaser.Timer.SECOND * 3, me.startGame, this).autoDestroy = true;

	},

	startGame: function(){
		var me = this;
		game.state.start("ReadySet");
	}

}
