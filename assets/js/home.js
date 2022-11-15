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
let player_head = new Image();
player_head.src = "assets/img/player_head.png";

let map_icon_koster = new Image();
map_icon_koster.src = "assets/img/maps/icons/koster.png";
let map_icon_mech = new Image();
map_icon_mech.src = "assets/img/maps/icons/mech.png";
let map_icon_mone = new Image();
map_icon_mone.src = "assets/img/maps/icons/mone.png";
let map_icon_skelt = new Image();
map_icon_skelt.src = "assets/img/maps/icons/skelt.png";
let map_icon_sundukoo = new Image();
map_icon_sundukoo.src = "assets/img/maps/icons/sundukoo.png";
let map_icon_yablo = new Image();
map_icon_yablo.src = "assets/img/maps/icons/yablo.png";
let map_lines = new Image();
map_lines.src = "assets/img/maps/icons/lines.png";
let galochka = new Image();
galochka.src = "assets/img/maps/icons/galochka.png";

let pokemon_normal_img = new Image();
pokemon_normal_img.src = "assets/img/pokemons/sprites.png";
let pokemon_you_img = new Image();
pokemon_you_img.src = "assets/img/pokemons/sprites_for_fight_you.png";
let pokemon_enemy_img = new Image();
pokemon_enemy_img.src = "assets/img/pokemons/sprites_for_fight.png";
//
let player_movement_ability = 0;

let adventure_type;
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
let player_on_map = {
  w: 40,
  h: 40,
  speed: 5,
  x: 0,
  y: 0,
};
let array_map = [];
let lines_map = [];

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
  //активный поход
  if (game_mode == 1 && game_variant == 2) {
    for (let i = 0; i < array_map.length; i++) {
      context.drawImage(
        array_map[i].img,
        array_map[i].x,
        array_map[i].y,
        array_map[i].w,
        array_map[i].h
      );
    }
    for (let i = 0; i < lines_map.length; i++) {
      context.drawImage(
        lines_map[i].img,
        lines_map[i].img_x,
        lines_map[i].img_y,
        lines_map[i].img_w,
        lines_map[i].img_h,
        lines_map[i].x,
        lines_map[i].y,
        lines_map[i].w,
        lines_map[i].h
      );
    }
    context.drawImage(player_head, player_on_map.x, player_on_map.y, 40, 40);
  }
  if (game_mode == 1 && game_variant == 3) {
    context.clearRect(0, 0, width_screen / 1.17, height_screen / 1.24);
    context.drawImage(
      pokemon_you_img,
      fight_you.sprite_fight_you_x,
      fight_you.sprite_fight_you_y,
      fight_you.sprite_fight_w,
      fight_you.sprite_fight_h,
      width_screen / 7.5,
      height_screen / 1.64,
      width_screen / 9.84,
      height_screen / 5.32
    );
    context.drawImage(
      pokemon_enemy_img,
      fight_enemy.sprite_fight_x,
      fight_enemy.sprite_fight_y,
      fight_enemy.sprite_fight_w,
      fight_enemy.sprite_fight_h,
      width_screen / 1.57,
      height_screen / 1.64,
      width_screen / 9.84,
      height_screen / 5.32
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
let confirm_message = document.getElementsByClassName("confirm_message")[0];
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
  //карта передвижение
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (
    pressKey.keyCode == 87 &&
    game_mode == 1 &&
    game_variant == 2 &&
    array_map[player_movement_ability].may_pass == true
  ) {
    if (player_movement_ability < array_map.length) {
      player_movement_ability++;
    }
    player_on_map.x = array_map[player_movement_ability].x;
    player_on_map.y = array_map[player_movement_ability].y;
    game_text.innerHTML = array_map[player_movement_ability].description;
    if (array_map[player_movement_ability].visited == false) {
      context.drawImage(
        enter_button_img,
        width_screen / 1.14,
        height_screen / 1.16,
        180,
        70
      );
    } else {
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
    }
  }
  if (pressKey.keyCode == 83 && game_mode == 1 && game_variant == 2) {
    if (player_movement_ability > 0) {
      player_movement_ability--;
    }
    player_on_map.x = array_map[player_movement_ability].x;
    player_on_map.y = array_map[player_movement_ability].y;
    game_text.innerHTML = array_map[player_movement_ability].description;
    if (array_map[player_movement_ability].visited == false) {
      context.drawImage(
        enter_button_img,
        width_screen / 1.14,
        height_screen / 1.16,
        180,
        70
      );
    } else {
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (pressKey.keyCode == 13) {
    if (game_mode == 0 && game_variant == 0) {
      game_text.innerHTML = "";
      game_mode = 1;
      context.clearRect(
        width_screen / 1.17,
        height_screen / 1.24,
        width_screen - width_screen / 1.17,
        height_screen - height_screen / 1.24
      );
    }
    if (game_variant == 2) {
      switch (game_mode) {
        case 1:
          startEvent();
          break;
        case 0:
          array_map[player_movement_ability].type = 7;
          array_map[player_movement_ability].img = galochka;
          array_map[player_movement_ability].visited = true;
          array_map[player_movement_ability].description = "Пройдено";
          array_map[player_movement_ability].may_pass = true;
          game_mode = 1;
          break;
      }
    }
  }
  if (pressKey.keyCode == 27) {
    if (game_variant == 1) {
      confirm_journey.style = "display: none";
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
    if (game_variant == 2 && game_mode == 1) {
      confirm_message.innerHTML = "Выйти из путешествия?";
      game_mode = 0;
      confirm_journey.style = "display: block";
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
    if (game_mode == 1 && game_variant == 0) {
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
          game_text.innerHTML =
            "Этот цветок в вашем доме невероятно радует вас!";
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
  switch (game_variant) {
    case 1:
      game_variant = 2;
      game_mode = 1;
      if (adventure_type == 1) {
        canvas.style.backgroundImage = "url(assets/img/maps/forest_map.png)";
        player_on_map.x = width_screen / 2.27;
        player_on_map.y = height_screen / 1.37;
        spawn_object(2.27, 1.37, 7);
        spawn_object(2.27, 1.98, 2);
        drawLine(2.27, 1.98, 2.27, 1.37, 1);
        spawn_object(1.53, 1.98, getRandomInt(5, 2));
        drawLine(2.27, 1.98, 1.53, 1.98, 2);
        spawn_object(1.53, 11.53, 2);

        drawLine(1.53, 11.53, 1.53, 1.98, 1);
        spawn_object(1.44, 11.53, getRandomInt(5, 2));

        drawLine(1.53, 11.53, 1.44, 11.53, 2);
        spawn_object(1.44, 107, 2);
        drawLine(1.44, 107, 1.44, 11.53, 1);
      }
      context.clearRect(0, 0, width_screen / 1.17, height_screen / 1.24);
      locations.style = "display: none";
      confirm_journey.style = "display: none";
      break;
    case 2:
      game_mode = 1;
      game_variant = 0;
      game_text.innerHTML = "";
      canvas.style.backgroundImage = "url(assets/img/home_final.png)";
      context.clearRect(0, 0, width_screen / 1.17, height_screen / 1.24);
      confirm_journey.style = "display: none";
      confirm_message.innerHTML = "Отправиться в выбранное путешествие?";
      player_movement_ability = 0;
      array_map = [];
      lines_map = [];
      break;
  }
}

function spawn_object(object_x, object_y, object_type) {
  switch (object_type) {
    //бой с боссом
    case 1:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 1,
        w: 40,
        h: 40,
        img: map_icon_skelt,
        visited: false,
        description: "Сражение с боссом",
        may_pass: false,
      });
      break;
    //обычный бой
    case 2:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 2,
        w: 40,
        h: 40,
        img: map_icon_mech,
        visited: false,
        description: "Сражение",
        may_pass: false,
      });
      break;
    //магазин
    case 3:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 3,
        w: 40,
        h: 40,
        img: map_icon_mone,
        visited: false,
        description: "Магазин",
        may_pass: true,
      });
      break;
    //костер
    case 4:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 4,
        w: 40,
        h: 40,
        img: map_icon_koster,
        visited: false,
        description: "Костер",
        may_pass: true,
      });
      break;
    case 5:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 5,
        w: 40,
        h: 40,
        img: map_icon_sundukoo,
        visited: false,
        description: "Сундук",
        may_pass: true,
      });
      break;
    case 6:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 6,
        w: 40,
        h: 40,
        img: map_icon_yablo,
        visited: false,
        description: "Странные фрукты",
        may_pass: true,
      });
      break;
    //галочка
    case 7:
      array_map.push({
        x: width_screen / object_x,
        y: height_screen / object_y,
        type: 7,
        w: 40,
        h: 40,
        img: galochka,
        visited: true,
        description: "Пройдено",
        may_pass: true,
      });
      break;
  }
}

function drawLine(x_start, y_start, x_end, y_end, type_of_line) {
  //вертикальная
  if (type_of_line == 1) {
    lines_map.push({
      img: map_lines,
      img_x: 0,
      img_y: 0,
      img_w: 5,
      img_h: height_screen / y_end - (height_screen / y_start + 40),
      x: width_screen / x_start + 17,
      y: height_screen / y_start + 40,
      w: 5,
      h: height_screen / y_end - (height_screen / y_start + 40),
    });
  }
  //горищонтальная
  if (type_of_line == 2) {
    lines_map.push({
      img: map_lines,
      img_x: 5,
      img_y: 0,
      img_w: width_screen / x_end - (width_screen / x_start + 40),
      img_h: 5,
      x: width_screen / x_start + 40,
      y: height_screen / y_start + 17,
      w: width_screen / x_end - (width_screen / x_start + 40),
      h: 5,
    });
  }
}

function getRandomInt(max, step) {
  return Math.floor(Math.random() * max + step);
}
