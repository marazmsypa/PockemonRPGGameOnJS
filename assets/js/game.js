let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

let width_screen = window.innerWidth;
let height_screen = window.innerHeight;
canvas.width = width_screen;
canvas.height = height_screen;
//Изображения
let home_img = new Image();
home_img.src = "assets/img/spriteh2ou.png";
let player_img = new Image();
player_img.src = "assets/img/player.png";
//

let player = {
  w: 200,
  h: 300,
  x: width_screen / 2,
  y: height_screen / 2,
  speed: 3,
  img_w: 21,
  img_h: 24,
};
document.addEventListener("keydown", movePlayer);
function Game() {
  context.clearRect(0, 0, width_screen, height_screen);
  context.drawImage(home_img, 0, 0, width_screen, height_screen);
  context.drawImage(player_img, player.x, player.y, player.w, player.h);
  document.addEventListener("keydown", movePlayer);
  requestAnimationFrame(Game);
}

function movePlayer(pressKey) {
  console.log(pressKey.keyCode);
  //87-w 83-s 65-a 68-d
  switch (pressKey.keyCode) {
    case 87:
      player.y -= player.speed;
      break;
    case 83:
      player.y += player.speed;

      break;
    case 65:
      player.x -= player.speed;

      break;
    case 68:
      player.x += player.speed;
      break;
  }
}
