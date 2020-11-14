'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 960;
let h = 540;
let player;
let coins = [];
let playerImg;
let coinImg;
let oceanImg;
let titleImg;

function preload() {
  playerImg = loadImage('assets/images/om.PNG');
  coinImg = loadImage('assets/images/sb.PNG');
  oceanImg = loadImage('assets/images/ocean.PNG');
  titleImg = loadImage('assets/images/title.PNG');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();
  //  coin [0]= new Coin();
  coins.push(new Coin());
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

  //$( "#player" ).keydown(function() {
  //alert( "Handler for .keydown() called." );
  //});
  //  }

  //if (state === 'title') {
  //  title();
  //  cnv.mouseClicked(titleMouseClicked);
  //} else if (state === "level 1" && points > 50) {
  //  level1();
  //  cnv.mouseClicked(level1MouseClicked);
  //} else {

  //}
  //}



  function keyPressed() {
    if (keyCode == LEFT_ARROW || key == 'a') {
      player.direction = 'left'
    } else if (keyCode == RIGHT_ARROW || key == 'd') {
      player.direction = 'right'
    } else if (keyCode == UP_ARROW || key == 'w') {
      player.direction = 'up'
    } else if (keyCode == DOWN_ARROW || key == 's') {
      player.direction = 'down'
    } else if (key == ' ') {
      player.direction = 'still'
    }
  }

  function keyReleased() {
    if (player == '') {
      player.direction = 'still'
    }
    return false;
  }



  function title() {
    background(titleImg);
    textSize(80);
    stroke(255);
    //fill(5);
    //text('Game', 200, 200);

    textSize(33);
    text('Start', 450, 350);

    textSize(30);
    text('How To Play', 400, 400);
  }

  function titleMouseClicked() {

    //console.log('canvas is clicked on title page');
    state = 'level 1';

  }

  function level1() {
    background(oceanImg);

    if (random(1) <= 0.01) {
      coins.push(new Coin());
    }

    player.display();
    player.move();

    //coins[0].display();
    //coins[0].move();

    for (let i = 0; i < coins.length; i++) {
      coins[i].display();
      coins[i].move();

    }

    // check for collision, if there is a collision inccrease points by 1 AND splice taht coin out of array
    // need to iterate backwards through array

    for (let i = coins.length - 1; i >= 0; i--) {
      if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
        points++;

        coins.splice(i, 1);
      } else if (coins[i].y > h) {
        coins.splice(i, 1);
        //console.log('coin out');
      }
    }
    textSize(30);
    //`poinrs: ${points}` == 'points: ' + points,
    text(`points: ${points}`, 30, height - 10);
  }

  function level1MouseClicked() {
    //points++;
    console.log('points = ' + points);

    if (points >= 100) {
      state = 'you win';
    }


    function youWin() {
      background(255, 255, 255);
      textSize(80);
      stroke(255);
      text('Congraluation, you win!', 200, 200);

      textSize(30);
      text('Restart', 270, 300);

    }

    function youWinMouseClicked() {
      state = 'level 1';
      points = 0;
      witch.display();
      witchr.move();
    }
  }
}
