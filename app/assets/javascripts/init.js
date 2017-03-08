$(document).ready(function() {

//Create a new game that fills the screen
game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

//Add all states
game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("GameTitle", GameTitle);
game.state.add("ReadySet", ReadySet);
game.state.add("Main", Main);
game.state.add("LevelTwo", LevelTwo);
game.state.add("LevelThree", LevelThree);
game.state.add("LevelFour", LevelFour);
game.state.add("GameOver", GameOver);

//Start the first state
game.state.start("Boot");

});
