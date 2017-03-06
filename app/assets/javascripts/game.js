// var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


//Create a new game
 // function () {
 //  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 //
 //  //Add all states
 //  game.state.add("Boot", Boot);
 //  game.state.add("Preload", Preload);
 //  game.state.add("GameTitle", GameTitle);
 //  game.state.add("Main", Main);
 //  game.state.add("GameOver", GameOver);
 //
 //  //Start the first state
 //  game.state.start("Boot");
 // }()

// function preload() {
//
//     game.load.image('sky', '/assets/sky.png');
//     game.load.image('ground', '/assets/platform.png');
//     game.load.image('grassy-platform', '/assets/dirt_grass.png')
//     game.load.spritesheet('princess', '/assets/princess.png', 35, 56);
//     game.load.spritesheet('frog', '/assets/frog.png', 35, 44);
//
//     // game.load.image('ground', 'assets/platform.png');
//     // game.load.image('star', 'assets/star.png');
//     // game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
//
// }
//
// var platforms;
// var player;
// var frog;
// var grassyPlatformWidth;
// var grassyPlatformHeight;
//
//
// function create() {
//
//
//   var me = this;
//
//
//   game.physics.startSystem(Phaser.Physics.ARCADE);
//
//   game.add.sprite(0, 0, 'sky');
//
//   grassyPlatformWidth = game.cache.getImage('grassy-platform').width;
//   grassyPlatformHeight = game.cache.getImage('grassy-platform').height;
//
//
//   platforms = game.add.group();
//   platforms.enableBody = true;
//   platforms.createMultiple(250, 'grassy-platform')
//   var ground = platforms.create(0, game.world.height - 64, 'ground');
//   ground.scale.setTo(2, 2);
//   ground.body.immovable = true;
//
//   timer = game.time.events.loop(2000, addPlatform, me);
//
//
//
//   player = game.add.sprite(35, game.world.height - 150, 'princess');
//   player.frame = 4;
//
//
//   game.physics.arcade.enable(player);
//
//   player.body.bounce.y = 0.2;
//   player.body.gravity.y = 300;
//   player.body.collideWorldBounds = true;
//
//   player.animations.add('left', [0, 1, 2, 3], 10, true);
//   player.animations.add('right', [5, 6, 7, 8], 10, true);
//
//   cursors = game.input.keyboard.createCursorKeys();
//
//   frog = game.add.sprite(35, game.world.height - 150, 'frog');
//   frog.frame = 4;
//   game.physics.arcade.enable(frog);
//
//   frog.body.bounce.y = 0.3;
//   frog.body.gravity.y = 300;
//   frog.body.collideWorldBounds = true;
//
//
// }
//
// function update() {
//   game.physics.arcade.collide(player, platforms);
//   player.body.velocity.x = 0;
//   // game.physics.moveToObject(frog, player)
//
//   if (cursors.left.isDown)
//   {
//       //  Move to the left
//       player.body.velocity.x = -150;
//
//       player.animations.play('left');
//   }
//   else if (cursors.right.isDown)
//   {
//       //  Move to the right
//       player.body.velocity.x = 150;
//
//       player.animations.play('right');
//   }
//   else
//   {
//       //  Stand still
//       player.animations.stop();
//
//       player.frame = 4;
//   }
//
//   //  Allow the player to jump if they are touching the ground.
//   if (cursors.up.isDown && player.body.touching.down)
//   {
//       player.body.velocity.y = -350;
//       player.frame = 4;
//   }
//
//
// }
//
