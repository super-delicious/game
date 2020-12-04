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
let hImg;
let titleImg;
let maskImg;
let suitImg;
var gameState = "L1";
var song1;
var song2;
var song3;
var song4;
var song5;
var song6;



function preload() {
  song1 = loadSound('assets/sounds/music_01.mp3');
  song2 = loadSound('assets/sounds/music_02.mp3');
  song3 = loadSound('assets/sounds/music_03.mp3');
  song4 = loadSound('assets/sounds/music_04.mp3');
  song5 = loadSound('assets/sounds/music_gameover.mp3');
  song6 = loadSound('assets/sounds/music_win.mp3');

  playerImg = loadImage('assets/images/om.PNG');
  coinImg = loadImage('assets/images/sb.PNG');
  //  coinImg = loadImage('assets/images/sb2.PNG');
  oceanImg = loadImage('assets/images/ocean.PNG');
  titleImg = loadImage('assets/images/title.PNG');
  hImg = loadImage('assets/images/hos.PNG');
  maskImg = loadImage('assets/images/mask.PNG');
  suitImg = loadImage('assets/images/suit.PNG');
}

function setup() {
  cnv = createCanvas(w, h);
  textStyle(BOLD);

  textFont('monospace');

  player = new Player();
  //  coin [0]= new Coin();
  coins.push(new Coin());

}

function draw() {
  if (gameState == "L1") {
    level1();
  }
  if (gameState == "L2") {
    level2();
  }

  // state statment for 1 var
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      //  playControls();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }
}


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
    player.direction = 'still';
  }
}

function keyReleased() {

  player.direction = 'still';

}



function title() {
  background(titleImg);
  textSize(80);
  stroke(255);
  //fill(5);
  //text('Game', 200, 200);
  textSize(50);
  fill('98cdff');
  text(' Dr.XXX ', 360, 180);

  textSize(33);
  fill('ecfee4');
  text('Start', 450, 250);

  textSize(30);
  text('How To Play', 400, 320);
}

function titleMouseClicked() {

  //console.log('canvas is clicked on title page');
  state = 'level 1';

}


function level1() {
  background(posImg);

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
      //console.log('coin is out');
    }
  }
  fill(249, 255, 78);
  textSize(30);

  //`poinrs: ${points}` == 'points: ' + points,
  text(`Points: ${points}`, 30, height - 500);

  if (score >= 50) {
    gameState = "L2";
  }


} // end level 1 ============================================

function level2() {
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
      //console.log('coin is out');
    }
  }
  fill(249, 255, 78);
  textSize(30);

  //`poinrs: ${points}` == 'points: ' + points,
  text(`Points: ${points}`, 30, height - 500);

  if (score >= 100) {}

  //image(goverImg, 0, 0, 600, 600);

} // end level 2 ============================================


function level1MouseClicked() {
  //points++;
  //console.log('points = ' + points);

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

  }
}
