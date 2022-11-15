context.fillStyle = "white";
let position_y = height_screen / 50.76;
function rightMenu() {
  position_y = height_screen / 50.76;
  for (let i = 0; i < 7; i++) {
    context.fillRect(
      width_screen / 1.113,
      position_y,
      width_screen / 18.6,
      height_screen / 9.4
    );
    position_y += height_screen / 9;
  }
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
