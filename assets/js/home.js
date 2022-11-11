let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let game_text = document.getElementById("game_text");
let locations = document.getElementById("location_pick");

let width_screen = window.innerWidth;
let height_screen = window.innerHeight;
canvas.width = width_screen;
canvas.height = height_screen;
//Изображения
let player_img = new Image();
player_img.src = "assets/img/player.png";
let E_button_img = new Image();
E_button_img.src = "assets/img/buttons/button.png";
let enter_button_img = new Image();
enter_button_img.src = "assets/img/buttons/enter_button.png";
let esc_button_img = new Image();
esc_button_img.src = "assets/img/buttons/esc_button.png";
//
let game_mode = 1;
// 1 - активный 0 - меню или действие
let game_variant = 0;
//0 - дом 1 - меню путешествий 2 - поход
let player_width = width_screen / 12.8;
let player_height = height_screen / 5;
let player = {
  w: player_width,
  h: player_height,
  x: ((width_screen / 100) * 85) / 2 - player_width / 2,
  y: ((height_screen / 100) * 80) / 2 - player_height / 2,
  speed: 20,
  img_w: 900 / 4,
  img_h: 1089 / 4,
};
document.addEventListener("keydown", movePlayer);
function Game() {
  if (game_mode == 1 && game_variant == 0) {
    context.clearRect(0, 0, width_screen / 1.17, height_screen / 1.24);
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
  }
  document.addEventListener("keydown", movePlayer);
  requestAnimationFrame(Game);
}
let window_parse_h = height_screen / 20;
let window_parse_w = width_screen / 20;
let game_object = 0;
let game_active = 0;
let player_right_corner_x = player.x + player.w;
let player_bottom_y = player.y + player.h;
function movePlayer(pressKey) {
  game_active = 0;
  //69 Е
  if (game_mode == 1 && game_variant == 0) {
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
    }
  }
  if (pressKey.keyCode == 13) {
    if (game_mode == 0) {
      game_text.innerHTML = "";
      game_mode = 1;
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
    }
  }
  if (pressKey.keyCode == 27) {
    if (game_variant == 1) {
      game_mode = 1;
      game_variant = 0;
      locations.style = "display: none";
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
    }
  }
  if (pressKey.keyCode == 69) {
    if (game_object != 0) {
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
      context.drawImage(
        enter_button_img,
        width_screen / 1.14,
        height_screen / 1.16,
        180,
        70
      );
    }
    switch (game_object) {
      case 1:
        game_mode = 0;
        game_variant = 1;
        locations.style = "display: flex";
        context.drawImage(
          esc_button_img,
          width_screen / 1.14,
          height_screen / 1.16,
          180,
          70
        );
        break;
      case 2:
        game_text.innerHTML =
          "Не проводите слишком много времени за компом без отдыха!";
        game_mode = 0;
        break;
      case 3:
        game_text.innerHTML = "Здесь находится ваша одежда";
        game_mode = 0;
        break;
      case 4:
        game_text.innerHTML =
          "Вы открыли книгу и начали читать: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
        game_mode = 0;
        break;
      case 5:
        game_text.innerHTML = "Этот цветок в вашем доме невероятно радует вас!";
        game_mode = 0;
        break;
      case 6:
        game_text.innerHTML = "Эта стойка с кактусами дарует вам решимость";
        game_mode = 0;
        break;
      case 7:
        game_text.innerHTML = "Какой замечательный вид из этого окна!";
        game_mode = 0;
        break;
      case 8:
        game_text.innerHTML = "Вы вымыли свои грязные руки";
        game_mode = 0;
        break;
      case 9:
        game_text.innerHTML =
          "Сейчас на улице очень грязно и вы не можете пойти в магазин";
        game_mode = 0;
        break;
    }
  }
  console.log(pressKey.keyCode);
  //87-w 83-s 65-a 68-d

  player_right_corner_x = player.x + player.w;
  player_bottom_y = player.y + player.h;
  // 0 - ничего 1- коврик 2 - комп 3 - шкаф 4- книга
  // 5 - цветок 6 - стойка с кактусами 7- окно 8 - раковина 9 - магазин
  if (game_variant == 0) {
    if (
      (player.x > width_screen / 2.85 &&
        player.x < width_screen / 1.98 &&
        player_bottom_y > height_screen / 1.5) ||
      (player_right_corner_x > width_screen / 2.85 &&
        player_right_corner_x < width_screen / 1.98 &&
        player_bottom_y > height_screen / 1.5)
    ) {
      game_object = 1;
      game_active = 1;
    }
    if (
      (player.x > width_screen / 2.74 &&
        player.x < width_screen / 2.3 &&
        player_bottom_y < height_screen / 2.9) ||
      (player_right_corner_x > width_screen / 2.74 &&
        player_right_corner_x < width_screen / 2.3 &&
        player_bottom_y < height_screen / 2.9)
    ) {
      game_object = 2;
      game_active = 1;
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
      game_object = 3;
      game_active = 1;
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
      game_object = 8;
      game_active = 1;
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
      game_object = 7;
      game_active = 1;
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
      game_object = 9;
      game_active = 1;
    }
    if (
      (player_right_corner_x > width_screen / 1.28 &&
        player_bottom_y > height_screen / 2.45 &&
        player_bottom_y < height_screen / 1.64) ||
      (player.x < width_screen / 16 &&
        player_bottom_y > height_screen / 2.45 &&
        player_bottom_y < height_screen / 1.64)
    ) {
      game_object = 6;
      game_active = 1;
    }
    if (
      (player_right_corner_x > width_screen / 1.28 &&
        player_bottom_y > height_screen / 1.37) ||
      (player.x < width_screen / 16 && player_bottom_y > height_screen / 1.37)
    ) {
      game_object = 5;
      game_active = 1;
    }
    if (
      player.x < width_screen / 16 &&
      player_bottom_y > height_screen / 3.3 &&
      player_bottom_y < height_screen / 2.63
    ) {
      game_object = 4;
      game_active = 1;
    }
  }
  if (game_active == 1 && game_mode == 1) {
    context.drawImage(
      E_button_img,
      width_screen / 1.12,
      height_screen / 1.19,
      100,
      100
    );
  }
  if (game_active == 0 && game_variant == 0) {
    game_object = 0;
    context.clearRect(
      width_screen / 1.17,
      height_screen / 1.24,
      width_screen - width_screen / 1.17,
      height_screen - height_screen / 1.24
    );
  }
}

function adventure_start() {
  game_variant = 2;
  canvas.style.backgroundImage = "url(assets/img/maps/forest_map.png)";
  locations.style = "display: none";
  context.clearRect(0, 0, width_screen, height_screen);
  alert("nigger");
}
