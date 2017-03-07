var PIECE_WIDTH = 200,
    PIECE_HEIGHT = 200,
    BOARD_COLS = 3,
    BOARD_ROWS = 4;

    var piecesGroup,
        piecesAmount,
        shuffledIndexArray = [];

var LevelTwo = function(game){

};

LevelTwo.prototype = {



  create: function() {

    var me = this;

    me.prepareBoard();

  },

  update: function() {

  },

  gameOver: function() {
    this.game.state.start('Main');
  },

  levelUp: function () {
    // this.game.state.start('LevelTwo')
  },
  prepareBoard: function() {

    var me = this;

    var piecesIndex = 0,
        i, j,
        piece;

    BOARD_COLS = Math.floor(game.world.width / PIECE_WIDTH);
    BOARD_ROWS = Math.floor(game.world.height / PIECE_HEIGHT);

    piecesAmount = BOARD_COLS * BOARD_ROWS;
    shuffledIndexArray = me.createShuffledIndexArray();

    piecesGroup = me.game.add.group();

    for (i = 0; i < BOARD_ROWS; i++)
    {
        for (j = 0; j < BOARD_COLS; j++)
        {
            if (shuffledIndexArray[piecesIndex]) {
                piece = piecesGroup.create(j * PIECE_WIDTH, i * PIECE_HEIGHT, "puzzle", shuffledIndexArray[piecesIndex]);
            }
            else { //initial position of black piece
                piece = piecesGroup.create(j * PIECE_WIDTH, i * PIECE_HEIGHT);
                piece.black = true;
            }
            piece.name = 'piece' + i.toString() + 'x' + j.toString();
            piece.currentIndex = piecesIndex;
            piece.destIndex = shuffledIndexArray[piecesIndex];
            piece.inputEnabled = true;
            piece.events.onInputDown.add(me.selectPiece, this);
            piece.posX = j;
            piece.posY = i;
            piecesIndex++;
        }
    }

  },


  selectPiece: function(piece) {
    var me = this;

      var blackPiece = me.canMove(piece);

      //if there is a black piece in neighborhood
      if (blackPiece) {
          me.movePiece(piece, blackPiece);
      }

  },
  canMove: function(piece) {

      var foundBlackElem = false;

      piecesGroup.children.forEach(function(element) {
          if (element.posX === (piece.posX - 1) && element.posY === piece.posY && element.black ||
              element.posX === (piece.posX + 1) && element.posY === piece.posY && element.black ||
              element.posY === (piece.posY - 1) && element.posX === piece.posX && element.black ||
              element.posY === (piece.posY + 1) && element.posX === piece.posX && element.black) {
              foundBlackElem = element;
              return;
          }
      });

      return foundBlackElem;
  },
  movePiece: function(piece, blackPiece) {
      var me = this;

      var tmpPiece = {
          posX: piece.posX,
          posY: piece.posY,
          currentIndex: piece.currentIndex
      };

      game.add.tween(piece).to({x: blackPiece.posX * PIECE_WIDTH, y: blackPiece.posY * PIECE_HEIGHT}, 300, Phaser.Easing.Linear.None, true);

      //change places of piece and blackPiece
      piece.posX = blackPiece.posX;
      piece.posY = blackPiece.posY;
      piece.currentIndex = blackPiece.currentIndex;
      piece.name ='piece' + piece.posX.toString() + 'x' + piece.posY.toString();

      //piece is the new black
      blackPiece.posX = tmpPiece.posX;
      blackPiece.posY = tmpPiece.posY;
      blackPiece.currentIndex = tmpPiece.currentIndex;
      blackPiece.name ='piece' + blackPiece.posX.toString() + 'x' + blackPiece.posY.toString();

      //after every move check if puzzle is completed
      me.checkIfFinished();
  },
  checkIfFinished: function() {
      var me = this;

      var isFinished = true;

      piecesGroup.children.forEach(function(element) {
          if (element.currentIndex !== element.destIndex) {
              isFinished = false;
              return;
          }
      });

      if (isFinished) {
          levelUp();
      }

  },
  createShuffledIndexArray: function() {

    var me = this;

      var indexArray = [];

      for (var i = 0; i < piecesAmount; i++)
      {
          indexArray.push(i);
      }

      return me.shuffle(indexArray);

  },

  shuffle: function(array) {
    var me = this;

      var counter = array.length,
          temp,
          index;

      while (counter > 0)
      {
          index = Math.floor(Math.random() * counter);

          counter--;

          temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;

  }





};
