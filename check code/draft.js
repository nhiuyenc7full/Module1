let myReq;

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let xDrop1 = c.width / 2;
let yDrop1 = 0;
let isFood;

let xBasket = 150;
let yBasket = 560;
let wBasket = 100;
let hBasket = 20;
let count = 0;
let a = 0;
let increa = 0;
let mang = 3;
function score() {
  ctx.font = "20px sans-serif";
  ctx.fillText("Điểm: " + increa, 20, 30);
  ctx.fillText("Mạng: " + mang, 300, 30);
}

//increa chạy tới 6 thì ngừng, rồi chạy lại

function drawDrop1() {
  // if (yDrop1 <= c.height - 40) {
  //   if (isFood) {
  //     ctx.fillStyle = "green";
  //   } else {
  //     ctx.fillStyle = "red";
  //   }

  ctx.fillRect(xDrop1, yDrop1, 20, 20);
  // } else {
  yDrop1 = 0;
  xDrop1 = Math.floor(Math.random() * (c.width - 20));
  // let r = Math.random();
  // isFood = r > 0.5;
  count++;
}
// }

//a là biến chạy
function update() {
  yDrop1 += 5 + a;
}

function loop() {
  ctx.clearRect(0, 0, c.width, c.height - hBasket);
  update();
  drawDrop1();
  checkScore();
  score();
  if (count > 4) {
    a += 2;
    count = 0;
  }
  if (mang <= 0) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillText("GAMEOVER", 150, c.height / 2);
  }
  myReq = requestAnimationFrame(loop);
}

function checkScore() {
  if (
    yDrop1 + 20 === c.height - hBasket &&
    xDrop1 <= xBasket + wBasket &&
    xDrop1 + 20 >= xBasket
  )
    increa++;
  else if (
    yDrop1 + 20 === c.height - hBasket &&
    (xDrop1 <= xBasket + wBasket || xDrop1 + 20 >= xBasket)
  )
    mang--;
}

let ctx2 = c.getContext("2d");

function basket() {
  let grd = ctx2.createLinearGradient(0, 0, c.width, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(0.16, "orange");
  grd.addColorStop(0.32, "yellow");
  grd.addColorStop(0.48, "green");
  grd.addColorStop(0.64, "blue");
  grd.addColorStop(0.8, "indigo");
  grd.addColorStop(1, "violet");
  ctx2.fillStyle = grd;
  ctx2.fillRect(xBasket, yBasket, wBasket, hBasket);
  // ctx2.fillStyle = "purple";
  // ctx2.fillRect(xBasket, yBasket, wBasket, hBasket);
}
basket();
function moveLeft() {
  if (xBasket >= 0 + 5) {
    ctx2.clearRect(xBasket, 560, 100, 20);
    xBasket -= 40;
    basket();
  }
}
function moveRight() {
  if (xBasket + 100 <= c.width - 5) {
    ctx2.clearRect(xBasket, 560, 100, 20);
    xBasket += 40;
    basket();
  }
}
function move(evt) {
  switch (evt.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
    case 32:
      pause();
      break;
  }
}

function pause() {
  cancelAnimationFrame(myReq);
}
window.addEventListener("keydown", move);
window.addEventListener("click", loop);
