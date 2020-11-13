'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player = 0;
let coins = [];
let playerImg;
let coinsImg;

function preload() {
  playerImg = loadImage('assets/images/jump.GIF');
  coinsImg = loadImage('assets/images/surfboard.PNG');
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
        if (keyCode == LEFT_ARROW) {
          player.direction = 'left'
        } else if (keyCode == RIGHT_ARROW) {
          player.direction = 'right'
        } else if (keyCode == UP_ARROW) {
          player.direction = 'up'
        } else if (keyCode == DOWN_ARROW) {
          player.direction = 'down'
        } else if (key == ' ') {
          player.direction = 'still'
        }
      }

      function keyReleased() {
        if (player == '') {
          player.direction = 'still';
        }
        return false;
      }



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

        if (random(1 <= 0.01)) {
          coins.push(new Coin());
        }

        player.display();
        player.move();

        coins[0].display();
        coins[0].move();

        for (let i = 0; i < coins.length; i++) {
          coins[i].display();
          coins[i].move();

        }

        // check for collision, if there is a collision inccrease points by 1 AND splice taht coin out of array
        // need to iterate backwards through array

        for (let i = coins.length - 1; i >= 0; i--) {
          if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
            points++;
            console.log(points);
            coins.splice(i, 1);
          }
        }
        textSize(30);
        //`poinrs: ${points}` == 'points: ' + points,
        text(`points: ${points}`, 30, height - 10);
      }

      function level1MouseClicked() {
        //  points++;
        //  console.log('points = ' + points);

        //  if (points >= 10) {
        //    state = 'win';
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
