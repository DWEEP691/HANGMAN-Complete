var man;
var k1 = 0,k2 = 0,k3 = 0,k4 = 0,k5 = 0;
var tries = 6;
var ww1 = ["m","a","n","g","o"];
var ww2 = ["b","r","o","w","n","i","e"];
var ww3 = ["c","r","o","w","n"];
var ww4 = ["h","i","k","e"];
var w1 = ["_","_","_","_","_"];
var w2 = ["_","_","_","_","_","_","_"];
var w3 = ["_","_","_","_","_"];
var w4 = ["_","_","_","_"];
var arr = [w1,w2,w3,w4];
var arr2 = [ww1,ww2,ww3,ww4];
var rand,word;
var dc = 0;
var gameState = 0;
var hc = 0;

function setup(){
    var canvas = createCanvas(800,400);
    man = new Man();

    rand = round(random(0,3));
    word = arr[rand];
  }

function draw(){
    background("lightgreen");

    if(gameState == 0) {
    //displaying the man
    man.display();

    noStroke();
    //Hangman text
    textSize(80);
    fill("aqua");
    text("HANGMAN",300,80);

    //Guess the word text
    textSize(40);
    fill(35,48,103);
    text("Guess The Word!",350,140);

    //tries left text
    textSize(30);
    fill("black");
    text("tries left = " + tries, 420, 200);

    //word text
    textSize(80);
    fill("white");
    text(word,340,300);
  }

    //win condition
    win();
    //lose condition
    lose();
}

function keyPressed() {
  //word 1
  if(word == arr[0]) {
  if(key == ww1[0]) {
    w1[0] = ww1[0];
    dc+=1;
  }
  else if(key == ww1[1]) {
    w1[1] = ww1[1];
    dc+=1;
  }
  else if(key == ww1[2]) {
    w1[2] = ww1[2];
    dc+=1;
  }
  else if(key == ww1[3]) {
    w1[3] = ww1[3];
    dc+=1;
  }
  else if(key == ww1[4]) {
    w1[4] = ww1[4];
    dc+=1;
  }
  else {
    tries -= 1;
  }
}

  //word 2
  if(word == arr[1]) {
  if(key == ww2[0]) {
    w2[0] = ww2[0];
    dc+=1;
  }
  else if(key == ww2[1]) {
    w2[1] = ww2[1];
    dc+=1;
  }
  else if(key == ww2[2]) {
    w2[2] = ww2[2];
    dc+=1;
  }
  else if(key == ww2[3]) {
    w2[3] = ww2[3];
    dc+=1;
  }
  else if(key == ww2[4]) {
    w2[4] = ww2[4];
    dc+=1;
  }
  else if(key == ww2[5]) {
    w2[5] = ww2[5];
    dc+=1;
  }
  else if(key == ww2[6]) {
    w2[6] = ww2[6];
    dc+=1;
  }
  else {
    tries -= 1;
  }
}

  //word 3
  if(word == arr[2]) {
  if(key == ww3[0]) {
    w3[0] = ww3[0];
    dc+=1;
  }
  else if(key == ww3[1]) {
    w3[1] = ww3[1];
    dc+=1;
  }
  else if(key == ww3[2]) {
    w3[2] = ww3[2];
    dc+=1;
  }
  else if(key == ww3[3]) {
    w3[3] = ww3[3];
    dc+=1;
  }
  else if(key == ww3[4]) {
    w3[4] = ww3[4];
    dc+=1;
  }
  else {
    tries -= 1;
  }
}

//word 4
  if(word == arr[3]) {
  if(key == ww4[0]) {
    w4[0] = ww4[0];
    dc+=1;
  }
  else if(key == ww4[1]) {
    w4[1] = ww4[1];
    dc+=1;
  }
  else if(key == ww4[2]) {
    w4[2] = ww4[2];
    dc+=1;
  }
  else if(key == ww4[3]) {
    w4[3] = ww4[3];
    dc+=1;
  }
  else {
    tries -= 1;
  }
}
}

function win() {
  //word 1
  if(rand == 0) {
    console.log("mango");
    if(word[0]=='m'&&word[1]=='a'&&word[2]=='n'&&word[3]=='g'&&word[4]=='o') {
      gameState = 1;
    }
  }
  //word 2
  if(rand == 1) {
    console.log("brownie");
    if(word[0]=='b'&&word[1]=='r'&&word[2]=='o'&&word[3]=='w'&&word[4]=='n'&&word[5]=='i'&&word[6]=='e') {
      gameState = 1;
    }
  }
  //word 3
  if(rand == 2) {
    console.log("crown");
    if(word[0]=='c'&&word[1]=='r'&&word[2]=='o'&&word[3]=='w'&&word[4]=='n') {
      gameState = 1;
    }
  }
  //word 4
  if(rand == 3) {
    console.log("hike");
    if(word[0]=='h'&&word[1]=='i'&&word[2]=='k'&&word[3]=='e') {
      gameState = 1;
    }
  }

  if(gameState == 1) {
      fill("black");
      textSize(80);
      strokeWeight(1);
      text("Congratulations,",100,150);
      text("You Win!",240,250);
    }
}

function lose() {
  if(tries == 0) {
    gameState = 3;
  }
  if(gameState == 3) {
    fill("red");
    strokeWeight(1);
    textSize(60);
    text("Hanged To Death",160,100);
    fill("black");
    textSize(80);
    text("Better Luck Next",100,200);
    text("Time",300,300);
  }
}
