class Drop {
  constructor(name, width, height, status) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.status = status;
    this.img = new Image();
    this.arr = [
      "star1.png",
      "star2.png",
      "star3.png",
      "star4.png",
      "star5.png",
      "star6.png"
    ];
  }
  star() {
    let i = Math.floor(Math.random() * 5);
    this.src = Math.floor(Math.random * arr[i]);
    this.img.src = this.src;
  }
  boom() {}
}
let star = new Drop("Star", 60, 60, true);

let yImg = 0;
class Draw {
  constructor() {
    this.c = document.getElementById("myCanvas");
    this.ctx = c.getContext("2d");
  }
  drop() {
    img.onload = function() {
      let xImg = Math.round(Math.random() * (c.width - 55));
      ctx.drawImage(img, xImg, yImg, 55, 50);
      // drawDrop.drop();
    };
  }
}
let drawStar = new Draw();
drawStar.drop();
// boom() {
//   let img = new Image();
//   img.src = this.src;
//   img.onload = function() {
//     let xImg = Math.round(Math.random() * (c.width - 55));
//     ctx.drawImage(img, xImg, yImg, 55, 50);
//     // drawDrop.boom();
//   };
// }

// let dropStar = new Drop("Star", 20, 20, true);
// let dropGhost = new Drop("Ghost", 30, 30, false);
// let wordScore = new Word("Score", 10, 10, 20, "white");
// let wordChance = new Word("Chance", 300, 10, 20, "white");
// let basket = new Basket("Basket", "grey", 230, 800, 100, 20);

// wordScore.print(10);
// wordChance.print(2);

// class Word {
//   constructor(name, x, y, font, color) {
//     this.name = name;
//     this.x = x;
//     this.y = y;
//     this.font = font;
//     this.color = color;
//   }
//   print(aaa) {
//     document.write(this.name + ": " + aaa);
//   }
// }

// class Basket {
//   constructor(name, color, x, y, width, height) {
//     this.name = name;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   }
// }

// ctx.font = "20px/ sans-serif";
