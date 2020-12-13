'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 960;
let h = 540;
let player;
let coins = [];
let masks = [];
let suits = [];
let enemies = [];
let ybs = [];
let enemyImg;
let playerImg;
let coinImg;
let ybImg;
let oceanImg;
let hosImg;
let titleImg;
let maskImg;
let suitImg;
let goverImg;
let fishImg;
//song
var song1;
var eatSong2;
var song3;
var eatSong4;
var songOver;
var songWin;
//sprites
let playerSS;
let playerJSON;
let playerAnimation = [];








function preload() {
  //sounds
  song1 = loadSound("assets/sounds/music_01.wav");
  eatSong2 = loadSound("assets/sounds/music_02.mp3");
  song3 = loadSound("assets/sounds/music_03.wav");
  eatSong4 = loadSound("assets/sounds/music_04.mp3");
  songOver = loadSound("assets/sounds/music_gameover.mp3");
  songWin = loadSound("assets/sounds/music_win.mp3");
  //imgs
  playerImg = loadImage('assets/images/walk.GIF');
  coinImg = loadImage('assets/images/sb.PNG');
  ybImg = loadImage('assets/images/sb2.PNG');
  oceanImg = loadImage('assets/images/ocean.PNG');
  titleImg = loadImage('assets/images/title.PNG');
  hosImg = loadImage('assets/images/hos.PNG');
  maskImg = loadImage('assets/images/mask.PNG');
  suitImg = loadImage('assets/images/suit.PNG');
  goverImg = loadImage('assets/images/gover.PNG');
  enemyImg = loadImage('assets/images/mask2.PNG');
  fishImg = loadImage('assets/images/fish.PNG');
  //sprites
  playerSS = loadImage('assets/images/player.PNG');
  playerJSON = loadJSON('assets/images/player.json');

}

function setup() {

  song1.play();

  frameRate(12);

  cnv = createCanvas(w, h);

  textStyle(BOLD);

  textFont('monospace');

  player = new Player();
  coins.push(new Coin());
  enemies.push(new Enemy());

  //console.log(playerJSON.frame[0].frame);

  let playerFrames = playerJSON.frames;

  for (let i = 0; i < playerFrames.length; i++) {
    //console.log(playerFrames[i]);
    let pos = playerFrames[i].frame;
    let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
    playerAnimation.push(img);
    //console.log(playerAnimation);
  }
}

function draw() {

  //if (player.eat(sbs)) {
  //eatSong2.play();
  //picklocation();
  //}


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
    case 'level 2':
      level2();
      // playControls();
      // cnv.mouseClicked(level2MouseClicked);
      break;
    case 'level 3':
      level3();
      // playControls();
      // cnv.mouseClicked(level2MouseClicked);
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

  textSize(33);
  fill('dacd03');
  text('Start', 450, 380);

  textSize(30);
  fill('dacd03');
  text('How To Play', 400, 460);
}

function titleMouseClicked() {

  //console.log('canvas is clicked on title page');
  state = 'level 1';

}


function level1() {

  background(hosImg);


  // add mask =========================================================
  if (random(1) <= 0.09) {
    masks.push(new Mask());
  }
  if (random(1) <= 0.1) {
    enemies.push(new Enemy());
  }

  player.display();
  player.move();

  for (let i = 0; i < masks.length; i++) {
    masks[i].display();
    masks[i].move();
  }
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }
  // check for collision, if there is a collision inccrease points by 1 AND splice taht sb out of array
  // need to iterate backwards through array

  for (let i = masks.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, masks[i].x, masks[i].y) <= (player.r + masks[i].r) / 2) {
      points++;
      eatSong2.play();
      masks.splice(i, 1);

    } else if (masks[i].y > h) {
      masks.splice(i, 1);
      //console.log('sb is out');
    }
  }
  // enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points--;
      //console.log(points);
      songOver.play();
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      //console.log('waste mask')
    }
  }

  // add suit =========================================================
  if (random(1) <= 0.06) {
    suits.push(new Suit());
  }

  for (let i = 0; i < suits.length; i++) {
    suits[i].display();
    suits[i].move();

  }

  // check for collision, if there is a collision inccrease points by 1 AND splice taht sb out of array
  // need to iterate backwards through array

  for (let i = suits.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, suits[i].x, suits[i].y) <= (player.r + suits[i].r) / 2) {
      points++;
      eatSong2.play();
      suits.splice(i, 1);

    } else if (suits[i].y > h) {
      suits.splice(i, 1);
      //console.log('sb is out');
    }
  }


  // end suit ==========================================================
  fill(249, 255, 78);
  textSize(30);

  //`poinrs: ${points}` == 'points: ' + points,
  text(`Points: ${points}`, 30, height - 500);
  //  song1.play();

  if (points >= 10) {
    state = "level 2";
  }


} // end level 1 =======================================================

function level2() {

  background(oceanImg);
  background(fishImg);
  // add surfboard 1 ==========================================================
  if (random(1) <= 0.09) {
    coins.push(new Coin());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();

  }

  // check for collision, if there is a collision inccrease points by 1 AND splice taht coin out of array
  // need to iterate backwards through array

  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      eatSong4.play();
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      //console.log('coin is out');
    }
  }
  // end surfboard 1 add surfboard 2 ==========================================

  if (random(1) <= 0.09) {
    ybs.push(new Yb());
  }


  for (let i = 0; i < ybs.length; i++) {
    ybs[i].display();
    ybs[i].move();

  }

  // check for collision, if there is a collision inccrease points by 1 AND splice taht coin out of array
  // need to iterate backwards through array

  for (let i = ybs.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, ybs[i].x, ybs[i].y) <= (player.r + ybs[i].r) / 2) {
      points++;
      eatSong4.play();
      ybs.splice(i, 1);
    } else if (ybs[i].y > h) {
      ybs.splice(i, 1);
      //console.log('coin is out');
    }
  }

  fill(249, 255, 78);
  textSize(30);

  //`poinrs: ${points}` == 'points: ' + points,
  text(`Points: ${points}`, 30, height - 500);

  //if (points >= 2) {}

  if (points >= 20) {
    state = "level 3";
  }

} // end level 2 ======================================================

function level3() {

  // you win!!!
  background(goverImg);
  songWin.play();

}

function level1MouseClicked() {
  //points++;
  //console.log('points = ' + points);

  if (points >= 30) {
    state = 'you win';

  }


  //  function youWin() {
  //    background(255, 255, 255);
  //    textSize(80);
  //    stroke(255);
  //    text('Congraluation, you win!', 200, 200);

  //    textSize(30);
  //    text('Restart', 270, 300);
  //
  //  }

  function youWinMouseClicked() {
    state = 'level 1';
    points = 0;

  }
}
