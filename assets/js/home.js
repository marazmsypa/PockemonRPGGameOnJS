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
let player_width = width_screen / 12.8;
let player_height = height_screen / 5;
let player = {
  w: player_width,
  h: player_height,
  x: ((width_screen / 100) * 85) / 2 - player_width / 2,
  y: ((height_screen / 100) * 80) / 2 - player_height / 2,
  speed: 20,
  img_w: 200 / 4,
  img_h: 242 / 4,
};
document.addEventListener("keydown", movePlayer);
function Game() {
  context.clearRect(0, 0, width_screen, height_screen);
  context.drawImage(
    player_img,
    0,
    0,
    player.img_w,
    player.img_h,
    player.x,
    player.y,
    player.w,
    player.h
  );
  document.addEventListener("keydown", movePlayer);
  requestAnimationFrame(Game);
}
let window_parse_h = height_screen / 20;
let window_parse_w = width_screen / 20;
let game_object = 0;
// 0 - ничего 1- коврик 2 - комп 3 - шкаф 4- книга
// 5 - цветок 6 - стойка с кактусами 7- окно 8 - раковина 9 - магазин
let player_right_corner_x = player.x + player.w;
let player_bottom_y = player.y + player.h;
function movePlayer(pressKey) {
  game_object = 0;
  console.log(pressKey.keyCode);
  //87-w 83-s 65-a 68-d

  switch (pressKey.keyCode) {
    case 87:
      if (player.y > window_parse_h * 2) {
        player.y -= player.speed;
      }
      break;
    case 83:
      if (player.y < window_parse_h * 12) {
        player.y += player.speed;
      }
      break;
    case 65:
      if (player.x > window_parse_w * 1.2) {
        player.x -= player.speed;
      }

      break;
    case 68:
      if (player.x < window_parse_w * 14) {
        player.x += player.speed;
      }
      break;
    case 69: //Е
      break;
  }
  player_right_corner_x = player.x + player.w;
  player_bottom_y = player.y + player.h;
  if (
    (player.x > width_screen / 2.85 &&
      player.x < width_screen / 1.98 &&
      player_bottom_y > height_screen / 1.5) ||
    (player_right_corner_x > width_screen / 2.85 &&
      player_right_corner_x < width_screen / 1.98 &&
      player_bottom_y > height_screen / 1.5)
  ) {
    alert("коврик");
  }
  if (
    (player.x > width_screen / 2.74 &&
      player.x < width_screen / 2.3 &&
      player_bottom_y < height_screen / 2.9) ||
    (player_right_corner_x > width_screen / 2.74 &&
      player_right_corner_x < width_screen / 2.3 &&
      player_bottom_y < height_screen / 2.9)
  ) {
    alert("комп");
  }
  if (
    (player.x > width_screen / 4.36 &&
      player.x < width_screen / 3.6 &&
      player_bottom_y < height_screen / 2.9) ||
    (player_right_corner_x > width_screen / 4.36 &&
      player_right_corner_x < width_screen / 3.6 &&
      player_bottom_y < height_screen / 2.9) ||
    (player.x + player.w / 2 > width_screen / 4.36 &&
      player.x + player.w / 2 < width_screen / 3.6 &&
      player_bottom_y < height_screen / 2.9)
  ) {
    alert("шкаф");
  }
  if (
    (player.x > width_screen / 15.8 &&
      player.x < width_screen / 6.85 &&
      player_bottom_y < height_screen / 3.3) ||
    (player_right_corner_x > width_screen / 15.8 &&
      player_right_corner_x < width_screen / 6.85 &&
      player_bottom_y < height_screen / 3.3) ||
    (player.x + player.w / 2 > width_screen / 15.8 &&
      player.x + player.w / 2 < width_screen / 6.85 &&
      player_bottom_y < height_screen / 3.3)
  ) {
    alert("раковина");
  }
  if (
    (player.x > width_screen / 1.98 &&
      player.x < width_screen / 1.69 &&
      player_bottom_y < height_screen / 3.3) ||
    (player_right_corner_x > width_screen / 1.98 &&
      player_right_corner_x < width_screen / 1.69 &&
      player_bottom_y < height_screen / 3.3) ||
    (player.x + player.w / 2 > width_screen / 1.98 &&
      player.x + player.w / 2 < width_screen / 1.69 &&
      player_bottom_y < height_screen / 3.3)
  ) {
    alert("окно");
  }
  if (
    (player.x > width_screen / 1.5 &&
      player.x < width_screen / 1.3 &&
      player_bottom_y < height_screen / 2.7) ||
    (player_right_corner_x > width_screen / 1.5 &&
      player_right_corner_x < width_screen / 1.3 &&
      player_bottom_y < height_screen / 2.7) ||
    (player.x + player.w / 2 > width_screen / 1.5 &&
      player.x + player.w / 2 < width_screen / 1.3 &&
      player_bottom_y < height_screen / 2.7)
  ) {
    alert("магазин");
  }
  if (
    (player_right_corner_x > width_screen / 1.28 &&
      player_bottom_y > height_screen / 2.45 &&
      player_bottom_y < height_screen / 1.64) ||
    (player.x < width_screen / 16 &&
      player_bottom_y > height_screen / 2.45 &&
      player_bottom_y < height_screen / 1.64)
  ) {
    alert("кактусы");
  }
  if (
    (player_right_corner_x > width_screen / 1.28 &&
      player_bottom_y > height_screen / 1.37) ||
    (player.x < width_screen / 16 && player_bottom_y > height_screen / 1.37)
  ) {
    alert("цветочки");
  }
  if (
    player.x < width_screen / 16 &&
    player_bottom_y > height_screen / 3.3 &&
    player_bottom_y < height_screen / 2.63
  ) {
    alert("книга");
  }
}
