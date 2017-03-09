$(document).ready(function() {

//Create a new game that fills the screen
game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

//Add all states
game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("GameTitle", GameTitle);
game.state.add("ReadySet", ReadySet);
game.state.add("Main", Main);
game.state.add("ReadySet3", ReadySet3);
game.state.add("ReadySet2", ReadySet2);
game.state.add("LevelTwo", LevelTwo);
game.state.add("ReadySet1", ReadySet1);
game.state.add("LevelThree", LevelThree);
game.state.add("LevelFour", LevelFour);
game.state.add("GameOver", GameOver);
game.state.add("Finish", Finish);

//Start the first state
game.state.start("Boot");

});
