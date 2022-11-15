context.fillStyle = "white";
let position_y = height_screen / 50.76;
function rightMenu() {
  position_y = height_screen / 50.76;
  //for (let i = 0; i < 7; i++) {
  //context.fillRect(
  // width_screen / 1.113,
  //position_y,
  //width_screen / 18.6,
  // height_screen / 9.4
  //);
  // position_y += height_screen / 9;
  // }
  context.drawImage(
    player_head,
    width_screen / 1.113,
    height_screen / 50.76,
    width_screen / 18.6,
    height_screen / 9.4
  );
  position_y = height_screen / 50.76;
  position_y += height_screen / 9;
  for (let i = 0; i < active_pokemons_array.length; i++) {
    context.drawImage(
      pokemon_normal_img,
      active_pokemons_array[i].sprite_normal_x,
      active_pokemons_array[i].sprite_normal_y,
      active_pokemons_array[i].sprite_normal_w,
      active_pokemons_array[i].sprite_normal_h,
      width_screen / 1.113,
      position_y,
      width_screen / 18.6,
      height_screen / 9.4
    );
    position_y += height_screen / 9;
  }
}

function rightMenuClick(pokemon_number) {
  switch (pokemon_number) {
    case 0:
      if (active_pokemons_array.length > 0) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[0].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[0].max_hp +
          " ХП: " +
          active_pokemons_array[0].hp +
          " Множитель атаки: " +
          active_pokemons_array[0].attack +
          " Уровень: " +
          active_pokemons_array[0].level +
          " Опыт: " +
          active_pokemons_array[0].ex +
          " Опыт для уровня: " +
          active_pokemons_array[0].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[0].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[0].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[0].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[0].attack_4].name;
      }
      break;
    case 1:
      if (active_pokemons_array.length > 1) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[1].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[1].max_hp +
          " ХП: " +
          active_pokemons_array[1].hp +
          " Множитель атаки: " +
          active_pokemons_array[1].attack +
          " Уровень: " +
          active_pokemons_array[1].level +
          " Опыт: " +
          active_pokemons_array[1].ex +
          " Опыт для уровня: " +
          active_pokemons_array[1].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[1].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[1].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[1].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[1].attack_4].name;
      }
      break;
    case 2:
      if (active_pokemons_array.length > 2) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[2].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[2].max_hp +
          " ХП: " +
          active_pokemons_array[2].hp +
          " Множитель атаки: " +
          active_pokemons_array[2].attack +
          " Уровень: " +
          active_pokemons_array[2].level +
          " Опыт: " +
          active_pokemons_array[2].ex +
          " Опыт для уровня: " +
          active_pokemons_array[2].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[2].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[2].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[2].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[2].attack_4].name;
      }
      break;
    case 3:
      if (active_pokemons_array.length > 3) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[3].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[3].max_hp +
          " ХП: " +
          active_pokemons_array[3].hp +
          " Множитель атаки: " +
          active_pokemons_array[3].attack +
          " Уровень: " +
          active_pokemons_array[3].level +
          " Опыт: " +
          active_pokemons_array[3].ex +
          " Опыт для уровня: " +
          active_pokemons_array[3].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[3].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[3].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[3].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[3].attack_4].name;
      }
      break;
    case 4:
      if (active_pokemons_array.length > 4) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[4].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[4].max_hp +
          " ХП: " +
          active_pokemons_array[4].hp +
          " Множитель атаки: " +
          active_pokemons_array[4].attack +
          " Уровень: " +
          active_pokemons_array[4].level +
          " Опыт: " +
          active_pokemons_array[4].ex +
          " Опыт для уровня: " +
          active_pokemons_array[4].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[4].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[4].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[4].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[4].attack_4].name;
      }
      break;
    case 5:
      if (active_pokemons_array.length > 5) {
        game_text.innerHTML =
          "Статы " +
          active_pokemons_array[5].name +
          ":" +
          " МАХ ХП: " +
          active_pokemons_array[5].max_hp +
          " ХП: " +
          active_pokemons_array[5].hp +
          " Множитель атаки: " +
          active_pokemons_array[5].attack +
          " Уровень: " +
          active_pokemons_array[5].level +
          " Опыт: " +
          active_pokemons_array[5].ex +
          " Опыт для уровня: " +
          active_pokemons_array[5].ex_to_lvl +
          " Атака 1: " +
          array_attacks[active_pokemons_array[5].attack_1].name +
          " Атака 2: " +
          array_attacks[active_pokemons_array[5].attack_2].name +
          " Атака 3: " +
          array_attacks[active_pokemons_array[5].attack_3].name +
          " Атака 4: " +
          array_attacks[active_pokemons_array[5].attack_4].name;
      }
      break;
    case 6:
      break;
  }
}
