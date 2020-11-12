'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();
  coin = new Coin();

}

function draw() {
  // state statment for 1 var
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }
  //if (state === 'title') {
  //  title();
  //  cnv.mouseClicked(titleMouseClicked);
  //} else if (state === "level 1" && points > 50) {
  //  level1();
  //  cnv.mouseClicked(level1MouseClicked);
  //} else {

  //}
  //}


  function title() {
    background(20, 132, 132);
    textSize(80);
    stroke(255);
    fill(5);
    text('Game', 200, 200);

    textSize(30);
    text('start', 270, 300);

    textSize(30);
    text('How To Play', 220, 400);
  }

  function titleMouseClicked() {

    console.log('canvas is clicked on title page');
    state = 'level 1'

  }

  function level1() {
    background(113, 50, 299);
    //textSize(30);
    //text('click for ponts', 180, height - 300);

    player.display();
    coin.display();
    coin.move();
  }

  function level1MouseClicked() {
    points++;
    console.log('points = ' + points);

    if (points >= 10) {
      state = 'win'
    }


    function youWin() {
      background(20, 132, 132);
      textSize(80);
      stroke(255);
      text('Win', 200, 200);

      textSize(30);
      text('Restart', 270, 300);

    }

    function youWinMouseClicked() {
      state = 'level 1';
      points = 0;
    }

  }
}
