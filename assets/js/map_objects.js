//1 - бой с боссом 2 - бой 3 - магазин 4 - костер 5 - сундук
//6 - фрукты 7 - галочка
function startEvent() {
  switch (array_map[player_movement_ability].type) {
    case 1:
      break;
    case 2:
      normalFight();
      break;
    case 3:
      break;
    case 4:
      game_mode = 0;
      game_text.innerHTML = "Отдохнув у костра, вы востанавливаете все силы";
      for (let i = 0; i < active_pokemons_array.length; i++) {
        active_pokemons_array[i].hp = active_pokemons_array[i].max_hp;
      }
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
  }
}

//array_map.push({
// x: width_screen / object_x,
//y: height_screen / object_y,
// type: 2,
// w: 40,
// h: 40,
// img: map_icon_mech,
// visited: false,
// description: "Сражение",
// may_pass: false,
// });
