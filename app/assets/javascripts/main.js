var player;
var frog;
		// var prinny;

var Main = function(game){

};

Main.prototype = {

	create: function() {

		var me = this;

		//The spacing for the initial platforms
		me.spacing = 180;

		//Set the initial score
		me.score = 0;

		//Get the dimensions of the tile we are using
		me.tileWidth = me.game.cache.getImage('tile').width;
		me.tileHeight = me.game.cache.getImage('tile').height;

		//Set the background colour to blue
		// me.game.stage.backgroundColor = '479cde';
	  game.add.sprite(0, 0, 'sky');
		// game.add.sprite(0, 0, 'baguette');


		//Enable the Arcade physics system
		me.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Add a platforms group to hold all of our tiles, and create a bunch of them
		me.platforms = me.game.add.group();
		me.platforms.enableBody = true;
		me.platforms.createMultiple(450, 'tile');

		// var ground = me.platforms.create(0, game.world.height - 64, 'ground');
	  // ground.scale.setTo(2, 2);
	  // ground.body.immovable = true;

		//Create the inital on screen platforms
		me.initPlatforms();

		//Add the player to the screen
		me.createPlayer();

		//Add Frog to Screen
		me.createFrog();


		//Create the score label
		me.createScore();

		//Add a platform every 2 seconds
		me.timer = game.time.events.loop(2800, me.addPlatform, me);

	    //Enable cursor keys so we can create some controls
	    me.cursors = me.game.input.keyboard.createCursorKeys();

	},

	update: function() {
		var me = this;

		//Make the sprite collide with the ground layer
		me.game.physics.arcade.collide(me.player, me.platforms);
		me.game.physics.arcade.collide(me.frog, me.platforms);
		me.game.physics.arcade.collide(me.player, me.frog);


		me.locationX = me.player.body.position.x;
		// me.locationY = me.player.body.position.y;
		// console.log(me.locationX, me.locationY);

		// me.frog.body.position.x = (me.player.body.position.x - 50);
		// me.frog.body.position.y = (me.player.body.position.y - 50);
		// console.log(me.player.body.position, me.frog.body.position);
		// debugger
					// prinny.chain(me.frog).start();
					me.frogPosition(me.locationX);

						// console.log('prinny ' + me.locationX + '  frog ' + me.frog.position.x);



		if(me.player) {
			// frogPosition(me.locationX);
			if(me.player.body.velocity.x > 0) {
				me.frog.body.velocity.x == 130;
				me.frog.animations.play('right')
				// me.frog.body.position.x = (me.player.body.position.x);
			}else if (me.player.body.velocity.x < 0) {
				me.frog.body.velocity.x == -130;
				me.frog.animations.play('left')
				// me.frog.body.position.x = (me.player.body.position.x);
			}else if (me.player.body.velocity.y < 0) {
				me.frog.body.velocity.x == -320;
				me.frog.frame = 4;
				// me.frog.body.position.y = (me.player.body.position.y + 50);
			} else {
				me.frog.body.velocity.x = 0;
				me.frog.animations.stop();
				me.frog.frame = 4;
			}
		}




		// //Make the sprite jump when the up key is pushed
	  //   if(me.cursors.up.isDown && me.player.body.wasTouching.down) {
	  //    	me.player.body.velocity.y = -1400;
	  //   }
	  //   //Make the player go left
	  //   if(me.cursors.left.isDown){
	  //   	me.player.body.velocity.x += -30;
	  //   }
	  //   //Make the player go right
	  //   if(me.cursors.right.isDown){
	  //   	me.player.body.velocity.x += 30;
	  //   }

		  if (me.cursors.left.isDown)
		  {
		      //  Move to the left
		      me.player.body.velocity.x = -150;
		      me.player.animations.play('left');
					//FROG
					// me.frog.body.velocity.x = -100;
					// me.frog.animations.play('left');
		  }
		  else if (me.cursors.right.isDown)
		  {
		      //  Move to the right
		      me.player.body.velocity.x = 150;
		      me.player.animations.play('right');
					// FROG
					// me.frog.body.velocity.x = 100;
					// me.frog.animations.play('right');
		  }
		  else
		  {
		      //  Stand still
					me.player.body.velocity.x = 0;
		      me.player.animations.stop();
		      me.player.frame = 4;
					// FROG
					// me.frog.body.velocity.x = 0;
		      // me.frog.animations.stop();
		      // me.frog.frame = 4;

		  }

		  //  Allow the player to jump if they are touching the ground.
		  if (me.cursors.up.isDown && me.player.body.touching.down)
		  {
		      me.player.body.velocity.y = -350;
		      me.player.frame = 4;
					// FROG
					// me.frog.body.velocity.y = -350;
					// me.frog.frame = 4;
		  }

	    //Check if the player is touching the bottom
	    if(me.player.body.position.y >= me.game.world.height - me.player.body.height){
	    	me.gameOver();
	    }
			//if(player and frog collide) {
			// 	me.gameOver()
			// }

			if(me.score === 5) {
				me.levelUp();
			}

	},

	gameOver: function(){
		this.game.state.start('Main');
	},

	levelUp: function() {
		this.game.state.start('LevelThree')
	},

	addTile: function(x, y){

		var me = this;

		//Get a tile that is not currently on screen
	    var tile = me.platforms.getFirstDead();

	    //Reset it to the specified coordinates
	    tile.reset(x, y);
	    tile.body.velocity.y = 50;
	    tile.body.immovable = true;

	    //When the tile leaves the screen, kill it
	    tile.checkWorldBounds = true;
	    tile.outOfBoundsKill = true;
	},

	addPlatform: function(y){

		var me = this;

		//If no y position is supplied, render it just outside of the screen
		if(typeof(y) == "undefined"){
			y = -me.tileHeight;
			//Increase the players score
			me.incrementScore();
		}

		//Work out how many tiles we need to fit across the whole screen
		var tilesNeeded = Math.ceil(me.game.world.width / me.tileWidth);


		//Add a hole randomly somewhere
	    var hole = Math.floor(Math.random() * (tilesNeeded - 5)) + 1;


	    //Keep creating tiles next to each other until we have an entire row
	    //Don't add tiles where the random hole is

			//TODO FIXME!!
	    for (var i = 0; i < tilesNeeded; i++){
	        if (i != hole && i != hole + 1 && i != hole + 2 && i != hole + 3 && i != hole + 4 ){
	        	this.addTile(i * me.tileWidth, y);
	        }
	    }

	},

	initPlatforms: function(){

		var me = this,
				bottom = me.game.world.height - me.tileHeight,
				top = me.tileHeight;

		//Keep creating platforms until they reach (near) the top of the screen
		for(var y = bottom; y > top - me.tileHeight; y = y - me.spacing ){
			me.addPlatform(y);
		}

	},

	createPlayer: function(){

		var me = this;

		//Add the player to the game by creating a new sprite
		me.player = me.game.add.sprite(180,0, 'princess');
				// prinny = me.player;
		//Set the players anchor point to be in the middle horizontally
		me.player.anchor.setTo(0.5, 1.0);
		//Enable physics on the player
		me.game.physics.arcade.enable(me.player);
		//Make the player fall by applying gravity
		me.player.body.gravity.y = 300;
		//Make the player collide with the game boundaries
		me.player.body.collideWorldBounds = true;
		//Make the player bounce a little
		me.player.body.bounce.y = 0.2;

		me.player.animations.add('left', [0, 1, 2, 3], 10, true);
		me.player.animations.add('right', [5, 6, 7, 8], 10, true);

	},
	//
	createFrog: function() {
		var me = this;


		me.frog = me.game.add.sprite(0,0, 'frog');
		me.frog.anchor.setTo(0.5, 1.0);
		me.game.add.tween(me.frog).to({x: me.locationX, y: me.locationY}, 1000, Phaser.Easing.Linear.None)



		me.game.physics.arcade.enable(me.frog);
		me.frog.body.gravity.y = 500;
		me.frog.body.collideWorldBounds = true;
		me.frog.body.bounce.y = 0.3;

		me.frog.animations.add('left', [0, 1, 2, 3], 10, true);
		me.frog.animations.add('right', [5, 6, 7, 8], 10, true);





	},

	createScore: function(){

		var me = this;

		var scoreFont = "100px Arial";

		me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "0", {font: scoreFont, fill: "#fff"});
		me.scoreLabel.anchor.setTo(0.5, 0.5);
		me.scoreLabel.align = 'center';

	},

	incrementScore: function(){

		var me = this;

		me.score += 1;
		me.scoreLabel.text = me.score;

	},

	frogPosition: function( playerX ) {
		// if (me.frog.position.x > playerX) {
		// 	me.frog.position.x--;
		// } else {
		// 	me.frog.position.x++;
		// }
		var me = this;
		console.log('prinny ' + playerX + 'frog ' + me.frog.position.x);
	},



};
