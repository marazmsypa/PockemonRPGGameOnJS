let pokemons_array = [];
let active_pokemons_array = [];
let player_pokemons_array = [];

let scale_fight = 5;
function addPokemon_to_base(
  pokemon_id,
  pokemon_name,
  pokemon_type,
  pokemon_max_hp,
  pokemon_hp,
  pokemon_attack,
  pokemon_level,
  pokemon_level_increase,
  pokemon_ex,
  pokemon_ex_to_lvl,
  pokemon_sprite_normal_x,
  pokemon_sprite_normal_y,
  pokemon_sprite_normal_w,
  pokemon_sprite_normal_h,
  pokemon_sprite_fight_x,
  pokemon_sprite_fight_y,
  pokemon_sprite_fight_w,
  pokemon_sprite_fight_h,
  pokemon_sprite_fight_you_x,
  pokemon_sprite_fight_you_y
) {
  pokemons_array.push({
    id: pokemon_id,
    name: pokemon_name,
    type: pokemon_type,
    max_hp: pokemon_max_hp,
    hp: pokemon_hp,
    attack: pokemon_attack,
    level: pokemon_level,
    level_increase: pokemon_level_increase,
    ex: pokemon_ex,
    ex_to_lvl: pokemon_ex_to_lvl,
    sprite_fight_x: pokemon_sprite_fight_x * scale_fight,
    sprite_fight_y: pokemon_sprite_fight_y * scale_fight,
    sprite_fight_you_x: pokemon_sprite_fight_you_x * scale_fight,
    sprite_fight_you_y: pokemon_sprite_fight_you_y * scale_fight,
    sprite_fight_w: pokemon_sprite_fight_w * scale_fight,
    sprite_fight_h: pokemon_sprite_fight_h * scale_fight,
    sprite_normal_x: pokemon_sprite_normal_x,
    sprite_normal_y: pokemon_sprite_normal_y,
    sprite_normal_w: pokemon_sprite_normal_w,
    sprite_normal_h: pokemon_sprite_normal_h,
    attack_1: 0,
    attack_2: 0,
    attack_3: 0,
    attack_4: 0,
  });
}
//типы покемонов
// 1- нормальный, 2 - боевойб 3 - летающий, 4 - ядовитый, 5 - земляной
// 6 - каменный, 7 - насекомый, 8-призрачный, 9 - стальной,
// 10 - волшебный, 11 - огненный, 12 - водный, 13 - травяной
// 14 - электрический, 15 - психический, 16 - ледяной,
// 17 - драконий, 18 - темный

addPokemon_to_base(
  1,
  "Бульбазавр",
  13,
  100,
  100,
  1.1,
  1,
  1.1,
  0,
  10,
  22,
  19,
  35,
  41,
  7,
  9,
  20,
  19,
  1279,
  9
);
addPokemon_to_base(
  7,
  "Сквиртл",
  12,
  100,
  100,
  1.1,
  1,
  1.1,
  0,
  10,
  501,
  21,
  39,
  39,
  376,
  11,
  21,
  17,
  909,
  11
);
addPokemon_to_base(
  4,
  "Чармандер",
  11,
  100,
  100,
  1.1,
  1,
  1.1,
  0,
  10,
  262,
  20,
  36,
  41,
  171,
  9,
  21,
  19,
  1114,
  9
);
addPokemon_to_base(
  19,
  "Ратата",
  1,
  80,
  80,
  1.01,
  1,
  1.1,
  0,
  10,
  1463,
  8,
  36,
  57,
  991,
  7,
  20,
  21,
  295,
  7
);
addPokemon_to_base(
  25,
  "Пикачу",
  14,
  150,
  150,
  1.2,
  1,
  1.2,
  0,
  10,
  1932,
  19,
  45,
  44,
  7,
  39,
  21,
  20,
  1278,
  39
);
addPokemon_to_base(
  16,
  "Пиджи",
  3,
  80,
  80,
  1.01,
  1,
  1.1,
  0,
  10,
  1224,
  21,
  34,
  35,
  828,
  11,
  18,
  17,
  460,
  11
);

player_pokemons_array.push(pokemons_array[4]);
player_pokemons_array[0].attack_1 = 24;
player_pokemons_array[0].attack_2 = 24;
player_pokemons_array[0].attack_3 = 24;
player_pokemons_array[0].attack_4 = 24;
active_pokemons_array.push(pokemons_array[4]);
player_pokemons_array.push(pokemons_array[1]);
active_pokemons_array.push(pokemons_array[1]);
player_pokemons_array.push(pokemons_array[2]);
active_pokemons_array.push(pokemons_array[2]);
player_pokemons_array.push(pokemons_array[3]);
active_pokemons_array.push(pokemons_array[3]);
player_pokemons_array.push(pokemons_array[5]);
active_pokemons_array.push(pokemons_array[5]);
player_pokemons_array.push(pokemons_array[0]);
active_pokemons_array.push(pokemons_array[0]);
