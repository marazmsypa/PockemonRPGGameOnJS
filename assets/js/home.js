let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

let width_screen = window.innerWidth;
let height_screen = window.innerHeight;
canvas.width = width_screen;
canvas.height = height_screen;
//Изображения
let player_img = new Image();
player_img.src = "assets/img/player.png";
//

let player = {
  w: 150,
  h: 250,
  x: width_screen / 2,
  y: height_screen / 2,
  speed: 20,
  img_w: 21,
  img_h: 24,
};
document.addEventListener("keydown", movePlayer);
function Game() {
  context.clearRect(0, 0, width_screen, height_screen);
  context.drawImage(player_img, player.x, player.y, player.w, player.h);
  document.addEventListener("keydown", movePlayer);
  requestAnimationFrame(Game);
}
let window_parse_h = height_screen / 20;
let window_parse_w = width_screen / 20;
function movePlayer(pressKey) {
  console.log(pressKey.keyCode);
  //87-w 83-s 65-a 68-d
  switch (pressKey.keyCode) {
    case 87:
      if (player.y > window_parse_h) {
        player.y -= player.speed;
      }
      break;
    case 83:
      if (player.y < window_parse_h * 11.5) {
        player.y += player.speed;
      }
      break;
    case 65:
      if (player.x > -20) {
        player.x -= player.speed;
      }

      break;
    case 68:
      if (player.x < window_parse_w * 14) {
        player.x += player.speed;
      }
      break;
  }
}
