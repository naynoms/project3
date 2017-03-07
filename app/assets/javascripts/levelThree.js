var LevelThree = function(game){

};

LevelThree.prototype = {

  create: function() {

  },

  update: function() {

  },
  gameOver: function() {
    this.game.state.start('Main');
  },

  levelUp: function () {
    this.game.state.start('LevelThree')
  },

};
