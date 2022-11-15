let battle_field = document.getElementById("fight_menu");
let fight_you;
let fight_enemy;
let turn = 1; //1 - твой 0 - врага
let your_hp = document.getElementsByClassName("hp")[0];
let enemy_hp = document.getElementsByClassName("hp")[1];
let your_hp_name = document.getElementsByClassName("hp_name")[0];
let enemy_hp_name = document.getElementsByClassName("hp_name")[1];
let no_fight_menu = document.getElementById("right_menu_on_no_fight");

let attack_1_b = document.getElementsByClassName("attack_pokemon")[0];
let attack_2_b = document.getElementsByClassName("attack_pokemon")[1];
let attack_3_b = document.getElementsByClassName("attack_pokemon")[2];
let attack_4_b = document.getElementsByClassName("attack_pokemon")[3];

let buttons_change_array = [
  document.getElementsByClassName("change_pokemon")[0],
  document.getElementsByClassName("change_pokemon")[1],
  document.getElementsByClassName("change_pokemon")[2],
  document.getElementsByClassName("change_pokemon")[3],
  document.getElementsByClassName("change_pokemon")[4],
  document.getElementsByClassName("change_pokemon")[5],
];

function normalFight() {
  battle_field.style = "display: block";
  no_fight_menu.style = "display: none";
  game_variant = 3;
  game_mode = 1;
  context.clearRect(0, 0, width_screen, height_screen);
  canvas.style.backgroundImage = "url(assets/img/maps/forest_fight_map.png)";
  for (let i = 0; i < active_pokemons_array.length; i++) {
    if (active_pokemons_array[i].hp > 0) {
      fight_you = active_pokemons_array[i];
      break;
    }
  }
  let rndPok = getRandomInt(6, 0);
  fight_enemy = {
    id: pokemons_array[rndPok].id,
    name: pokemons_array[rndPok].name,
    type: pokemons_array[rndPok].type,
    max_hp: pokemons_array[rndPok].max_hp,
    hp: pokemons_array[rndPok].hp,
    attack: pokemons_array[rndPok].attack,
    level: pokemons_array[rndPok].level,
    level_increase: pokemons_array[rndPok].level_increase,
    ex: pokemons_array[rndPok].ex,
    ex_to_lvl: pokemons_array[rndPok].ex_to_lvl,
    sprite_fight_x: pokemons_array[rndPok].sprite_fight_x,
    sprite_fight_y: pokemons_array[rndPok].sprite_fight_y,
    sprite_fight_you_x: pokemons_array[rndPok].sprite_fight_you_x,
    sprite_fight_you_y: pokemons_array[rndPok].sprite_fight_you_y,
    sprite_fight_w: pokemons_array[rndPok].sprite_fight_w,
    sprite_fight_h: pokemons_array[rndPok].sprite_fight_h,
    sprite_normal_x: pokemons_array[rndPok].sprite_normal_x,
    sprite_normal_y: pokemons_array[rndPok].sprite_normal_y,
    sprite_normal_w: pokemons_array[rndPok].sprite_normal_w,
    sprite_normal_h: pokemons_array[rndPok].sprite_normal_h,
    attack_1: 0,
    attack_2: 0,
    attack_3: 0,
    attack_4: 0,
  };
  fight_enemy.attack_1 = getRandomInt(30, 1);
  fight_enemy.attack_2 = getRandomInt(30, 1);
  fight_enemy.attack_3 = getRandomInt(30, 1);
  fight_enemy.attack_4 = getRandomInt(30, 1);
  game_text.innerHTML = "Дикий " + fight_enemy.name + " напал на вас!";
  context.clearRect(
    width_screen / 1.17,
    height_screen / 1.24,
    width_screen - width_screen / 1.17,
    height_screen - height_screen / 1.24
  );
  document.getElementsByClassName("info_enemy")[0].innerHTML = fight_enemy.name;
  document.getElementsByClassName("info_enemy")[1].innerHTML =
    "Уровень: " + fight_enemy.level;
  document.getElementsByClassName("info_enemy")[2].innerHTML =
    "Атака: " + fight_enemy.attack;
  document.getElementsByClassName("info_enemy")[3].innerHTML =
    array_attacks[fight_enemy.attack_1].name;
  document.getElementsByClassName("info_enemy")[4].innerHTML =
    array_attacks[fight_enemy.attack_2].name;
  document.getElementsByClassName("info_enemy")[5].innerHTML =
    array_attacks[fight_enemy.attack_3].name;
  document.getElementsByClassName("info_enemy")[6].innerHTML =
    array_attacks[fight_enemy.attack_4].name;
  //изменяемые качества
  your_hp.setAttribute("max", fight_you.max_hp);
  your_hp.setAttribute("value", fight_you.hp);
  enemy_hp.setAttribute("max", fight_enemy.max_hp);
  enemy_hp.setAttribute("value", fight_enemy.hp);
  your_hp_name.innerHTML = fight_you.name;
  enemy_hp_name.innerHTML = fight_enemy.name;
  if (fight_you.attack_1 != 0) {
    attack_1_b.innerHTML = array_attacks[fight_you.attack_1].name;
  } else {
    attack_1_b.style = "display: none";
  }
  if (fight_you.attack_2 != 0) {
    attack_2_b.innerHTML = array_attacks[fight_you.attack_2].name;
  } else {
    attack_2_b.style = "display: none";
  }
  if (fight_you.attack_3 != 0) {
    attack_3_b.innerHTML = array_attacks[fight_you.attack_3].name;
  } else {
    attack_3_b.style = "display: none";
  }
  if (fight_you.attack_4 != 0) {
    attack_4_b.innerHTML = array_attacks[fight_you.attack_4].name;
  } else {
    attack_4_b.style = "display: none";
  }
  for (let i = 0; i < buttons_change_array.length; i++) {
    if (
      active_pokemons_array[i].id != fight_you.id &&
      active_pokemons_array[i].hp > 0 &&
      i < active_pokemons_array.length
    ) {
      buttons_change_array[i].innerHTML = active_pokemons_array[i].name;
      buttons_change_array[i].style = "display: block";
    }
  }
}

function changebile_pokemon() {
  your_hp.setAttribute("max", fight_you.max_hp);
  your_hp.setAttribute("value", fight_you.hp);
  your_hp_name.innerHTML = fight_you.name;
  if (fight_you.attack_1 != 0) {
    attack_1_b.innerHTML = array_attacks[fight_you.attack_1].name;
    attack_1_b.style = "display: block";
  } else {
    attack_1_b.style = "display: none";
  }
  if (fight_you.attack_2 != 0) {
    attack_2_b.innerHTML = array_attacks[fight_you.attack_2].name;
    attack_2_b.style = "display: block";
  } else {
    attack_2_b.style = "display: none";
  }
  if (fight_you.attack_3 != 0) {
    attack_3_b.innerHTML = array_attacks[fight_you.attack_3].name;
    attack_3_b.style = "display: block";
  } else {
    attack_3_b.style = "display: none";
  }
  if (fight_you.attack_4 != 0) {
    attack_4_b.innerHTML = array_attacks[fight_you.attack_4].name;
    attack_4_b.style = "display: block";
  } else {
    attack_4_b.style = "display: none";
  }
  for (let i = 0; i < buttons_change_array.length; i++) {
    if (
      active_pokemons_array[i].id != fight_you.id &&
      active_pokemons_array[i].hp > 0 &&
      i < active_pokemons_array.length
    ) {
      buttons_change_array[i].innerHTML = active_pokemons_array[i].name;
      buttons_change_array[i].style = "display: block";
    } else {
      buttons_change_array[i].innerHTML = "";
      buttons_change_array[i].style = "display: none";
    }
  }
}

function change_pokemon_battle_1() {
  if (turn == 1) {
    fight_you = active_pokemons_array[0];
    changebile_pokemon();
  }
}

function change_pokemon_battle_2() {
  if (turn == 1) {
    fight_you = active_pokemons_array[1];
    changebile_pokemon();
  }
}
function change_pokemon_battle_3() {
  if (turn == 1) {
    fight_you = active_pokemons_array[2];
    changebile_pokemon();
  }
}
function change_pokemon_battle_4() {
  if (turn == 1) {
    fight_you = active_pokemons_array[3];
    changebile_pokemon();
  }
}
function change_pokemon_battle_5() {
  if (turn == 1) {
    fight_you = active_pokemons_array[4];
    changebile_pokemon();
  }
}
function change_pokemon_battle_6() {
  if (turn == 1) {
    fight_you = active_pokemons_array[5];
    changebile_pokemon();
  }
}

function attack_use(attack) {
  if (turn == 1) {
    turn = 0;
    switch (attack) {
      case 1:
        game_text.innerHTML =
          fight_you.name +
          " использует " +
          array_attacks[fight_you.attack_1].name +
          "!";
        break;
      case 2:
        game_text.innerHTML =
          fight_you.name +
          " использует " +
          array_attacks[fight_you.attack_2].name +
          "!";
        break;
      case 3:
        game_text.innerHTML =
          fight_you.name +
          " использует " +
          array_attacks[fight_you.attack_3].name +
          "!";
        break;
      case 4:
        game_text.innerHTML =
          fight_you.name +
          " использует " +
          array_attacks[fight_you.attack_4].name +
          "!";
        break;
    }
    let use_attack_timer = setInterval(function () {
      let damage;
      switch (attack) {
        case 1:
          damage = Math.floor(
            array_attacks[fight_you.attack_1].base_dmg * fight_you.attack
          );
          game_text.innerHTML = "Атака нанесла " + damage + " урона";
          break;
        case 2:
          damage = Math.floor(
            array_attacks[fight_you.attack_2].base_dmg * fight_you.attack
          );
          game_text.innerHTML = "Атака нанесла " + damage + " урона";
          break;
        case 3:
          damage = Math.floor(
            array_attacks[fight_you.attack_3].base_dmg * fight_you.attack
          );
          game_text.innerHTML = "Атака нанесла " + damage + " урона";
          break;
        case 4:
          damage = Math.floor(
            array_attacks[fight_you.attack_4].base_dmg * fight_you.attack
          );
          game_text.innerHTML = "Атака нанесла " + damage + " урона";
          break;
      }
      fight_enemy.hp -= damage;
      enemy_hp.setAttribute("value", fight_enemy.hp);
      clearInterval(use_attack_timer);
      if (fight_enemy.hp > 0) {
        let use_attack_timer_enemy_to_turn = setInterval(function () {
          game_text.innerHTML = "Время хода противника!";
          enemy_deal_damage();
          clearInterval(use_attack_timer_enemy_to_turn);
        }, 2000);
      } else {
        game_text.innerHTML = fight_you.name + " побеждает!";
        win_fight();
      }
    }, 3000);
    //turn = 0;
  }
}

function enemy_deal_damage() {
  let enemy_start_deal_damage = setInterval(function () {
    let count_attacks = 0;
    if (fight_enemy.attack_1 != 0) {
      count_attacks = 1;
    }
    if (fight_enemy.attack_2 != 0) {
      count_attacks = 2;
    }
    if (fight_enemy.attack_3 != 0) {
      count_attacks = 3;
    }
    if (fight_enemy.attack_4 != 0) {
      count_attacks = 4;
    }
    let enemy_random_attack = getRandomInt(count_attacks, 1);
    let enemy_deal_damage_dmg;
    switch (enemy_random_attack) {
      case 1:
        enemy_deal_damage_dmg = Math.floor(
          array_attacks[fight_enemy.attack_1].base_dmg *
            fight_enemy.attack *
            fight_enemy.level
        );
        game_text.innerHTML =
          "Атака " +
          array_attacks[fight_enemy.attack_1].name +
          " нанесла " +
          enemy_deal_damage_dmg +
          " урона";
        break;
      case 2:
        enemy_deal_damage_dmg = Math.floor(
          array_attacks[fight_enemy.attack_2].base_dmg *
            fight_enemy.attack *
            fight_enemy.level
        );
        game_text.innerHTML =
          "Атака " +
          array_attacks[fight_enemy.attack_2].name +
          " нанесла " +
          enemy_deal_damage_dmg +
          " урона";
        break;
      case 3:
        enemy_deal_damage_dmg = Math.floor(
          array_attacks[fight_enemy.attack_3].base_dmg *
            fight_enemy.attack *
            fight_enemy.level
        );
        game_text.innerHTML =
          "Атака " +
          array_attacks[fight_enemy.attack_3].name +
          " нанесла " +
          enemy_deal_damage_dmg +
          " урона";
        break;
      case 4:
        enemy_deal_damage_dmg = Math.floor(
          array_attacks[fight_enemy.attack_4].base_dmg *
            fight_enemy.attack *
            fight_enemy.level
        );
        game_text.innerHTML =
          "Атака " +
          array_attacks[fight_enemy.attack_4].name +
          " нанесла " +
          enemy_deal_damage_dmg +
          " урона";
        break;
    }
    fight_you.hp -= enemy_deal_damage_dmg;
    your_hp.setAttribute("value", fight_you.hp);
    let use_attack_timer_you_to_turn = setInterval(function () {
      game_text.innerHTML = "Время вашего хода!";
      clearInterval(use_attack_timer_you_to_turn);
      turn = 1;
      if (fight_you.hp <= 0) {
        for (let i = 0; i < active_pokemons_array.length; i++) {
          if (active_pokemons_array[i].hp > 0) {
            fight_you = active_pokemons_array[i];
            break;
          }
        }
        changebile_pokemon();
      }
      clearInterval(use_attack_timer_you_to_turn);
    }, 2000);
    clearInterval(enemy_start_deal_damage);
  }, 2000);
}

function win_fight() {
  let interval_win = setInterval(function () {
    fight_you.ex += 10;
    if (fight_you.ex >= fight_you.ex_to_lvl) {
      fight_you.level += 1;
      fight_you.ex_to_lvl += 10;
      fight_you.ex = 0;
      fight_you.attack = fight_you.attack * fight_you.level_increase;
      fight_you.attack = Number(fight_you.attack.toFixed(2));
      fight_you.max_hp = Math.floor(
        fight_you.max_hp * fight_you.level_increase
      );
      fight_you.hp = fight_you.max_hp;
      game_text.innerHTML =
        fight_you.name +
        " получает новый уровень! Теперь его уровень " +
        fight_you.level;
    }
    context.clearRect(0, 0, width_screen / 1.17, height_screen / 1.24);
    game_variant = 2;
    game_mode = 1;
    canvas.style.backgroundImage = "url(assets/img/maps/forest_map.png)";
    rightMenu();
    battle_field.style = "display: none";
    no_fight_menu.style = "display: block";
    array_map[player_movement_ability].type = 7;
    array_map[player_movement_ability].img = galochka;
    array_map[player_movement_ability].visited = true;
    array_map[player_movement_ability].description = "Пройдено";
    array_map[player_movement_ability].may_pass = true;
    clearInterval(interval_win);
    turn = 1;
  }, 2000);
}
