function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function() {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  this.moveRight = function() {
    this.left += 10;
    // console.log("ok: " + this.left);
  };
  this.moveDown = function() {
    this.top += 10;
  };
  this.moveLeft = function() {
    this.left -= 10;
    console.log("ok: " + this.left);
  };
  this.moveUp = function() {
    this.top -= 10;
  };
}

var hero = new Hero("car1.png", 0, 0, 200);

function start() {
  if (hero.left <= window.innerWidth - hero.size && hero.top <= 0) {
    hero.moveRight();
  } else if (
    hero.top <= window.innerHeight - hero.size &&
    hero.left >= window.innerWidth - hero.size
  ) {
    hero.moveDown();
  } else if (hero.top >= window.innerHeight - hero.size && hero.left > 0) {
    hero.moveLeft();
  } else hero.moveUp();
  document.getElementById("game").innerHTML = hero.getHeroElement();
  // setTimeout(start, 50);
}

let run = setInterval(start, 50);

function stop() {
  clearInterval(run);
}
// start();
