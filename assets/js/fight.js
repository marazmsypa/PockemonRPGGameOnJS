let battle_field = document.getElementById("fight_menu");
let fight_you;
let fight_enemy;
let turn; //1 - твой 0 - врага
let your_hp = document.getElementsByClassName("hp")[0];
let enemy_hp = document.getElementsByClassName("hp")[1];
let your_hp_name = document.getElementsByClassName("hp_name")[0];
let enemy_hp_name = document.getElementsByClassName("hp_name")[1];

let attack_1_b = document.getElementsByClassName("attack_pokemon")[0];
let attack_2_b = document.getElementsByClassName("attack_pokemon")[1];
let attack_3_b = document.getElementsByClassName("attack_pokemon")[2];
let attack_4_b = document.getElementsByClassName("attack_pokemon")[3];

function normalFight() {
  battle_field.style = "display: block";
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
  fight_enemy = pokemons_array[4];
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
}
