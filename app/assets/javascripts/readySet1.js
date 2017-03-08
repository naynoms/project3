var player;

var ReadySet1 = function(game){};

ReadySet1.prototype = {

	create: function(){
		var me = this;
		game.add.sprite(0, 0, 'sky');
    me.ground = game.add.sprite(0, 568, 'ground');


    me.player = me.game.add.sprite(30, 512, 'princess');
    me.frog = me.game.add.sprite(0, 528, 'frog');
    me.game.physics.arcade.enable(me.player);
    me.game.physics.arcade.enable(me.frog);
    me.game.physics.arcade.enable(me.ground);


    me.player.body.gravity.y = 300;
    me.frog.body.gravity.y = 300;



    me.ground.body.immovable = true;


    me.player.animations.add('right', [5, 6, 7, 8], 7, true);
    game.physics.arcade.moveToXY(me.player, 480, 600, 0, 3000 )

    me.frog.animations.add('right', [5, 6, 7, 8], 7, true);
    game.physics.arcade.moveToXY(me.frog, 480, 600, 0, 4000 )

    me.player.animations.play('right');
    me.frog.animations.play('right');




		game.time.events.add(Phaser.Timer.SECOND * 5, me.startGame, this).autoDestroy = true;

	},

  update: function() {
    var me = this;

    me.game.physics.arcade.collide(me.player, me.ground);
    me.game.physics.arcade.collide(me.frog, me.ground);



  },

	startGame: function(){
		var me = this;
		game.state.start("LevelFour");
	}

}
