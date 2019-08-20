var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawImage() {
  let img = document.getElementById("smile");
  ctx.drawImage(img, 10, 10, 120, 100);
}
drawImage();
