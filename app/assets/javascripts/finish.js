var Finish = function(game){};

Finish.prototype = {

create: function() {
  var me = this;

  game.add.sprite(0, 0, 'sky');

  var congratsFont = "40px Arial";

  me.congrats = me.game.add.text((me.game.world.centerX), 100, "Très bien! You escaped the slimey frog!", {font: congratsFont, fill: "#fff"});
  me.congrats.anchor.setTo(0.5, 0.5);
  me.congrats.align = 'center';

},



};
