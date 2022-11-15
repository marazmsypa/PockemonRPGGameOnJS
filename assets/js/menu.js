$(document).ready(function () {
  up();
  let switch_menu_type = 0;
  let main_menu_screen = $(".main_menu");
  let new_game_screen = $(".new_game");
  let continue_game_screen = $(".continue_game");
  let settings_screen = $(".settings");
  let back_button = $(".back_button");
  let time_to_switch = 400;
  $(".start_new_game").click(function () {
    main_menu_screen.fadeOut();
    let timer_to_switch_str = setInterval(function () {
      new_game_screen.fadeIn();
      back_button.fadeIn();
      switch_menu_type = 1;
      new_game_screen.css("display", "grid");
      clearInterval(timer_to_switch_str);
    }, time_to_switch);
  });
  $(".continue_game_button").click(function () {
    main_menu_screen.fadeOut();
    let timer_to_switch_cnt = setInterval(function () {
      continue_game_screen.fadeIn();
      back_button.fadeIn();
      switch_menu_type = 2;
      clearInterval(timer_to_switch_cnt);
    }, time_to_switch);
  });
  $(".settings_button").click(function () {
    main_menu_screen.fadeOut();
    let timer_to_switch_stn = setInterval(function () {
      settings_screen.fadeIn();
      back_button.fadeIn();
      switch_menu_type = 3;
      settings_screen.css("display", "flex");
      clearInterval(timer_to_switch_stn);
    }, time_to_switch);
  });
  $(".back_button").click(function () {
    back_button.fadeOut();
    switch (switch_menu_type) {
      case 1:
        new_game_screen.fadeOut();
        break;
      case 2:
        continue_game_screen.fadeOut();
        break;
      case 3:
        settings_screen.fadeOut();
        break;
    }
    let timer_to_switch = setInterval(function () {
      main_menu_screen.fadeIn();
      switch_menu_type = 0;
      clearInterval(timer_to_switch);
    }, time_to_switch);
  });
  $(".ready_to_start_new_button").click(function () {
    let block_menu = $("#menu");
    let block_game = $("#game");
    let name_user = $(".name").val();
    if (name_user == "") {
      alert("Заполните имя!");
    } else {
      block_menu.css("display", "none");
      block_game.css("display", "block");
      Game();
      rightMenu();
    }
  });

  let main_menu_img = $(".img_menu");
  let top = window.innerHeight / 20;
  function up() {
    let timer_to_up = setInterval(function () {
      top += 1;
      main_menu_img.css("top", top);
      if (top > window.innerHeight / 10) {
        clearInterval(timer_to_up);
        down();
      }
    }, 20);
  }
  function down() {
    let timer_to_down = setInterval(function () {
      top -= 1;
      main_menu_img.css("top", top);
      if (top < window.innerHeight / 20) {
        clearInterval(timer_to_down);
        up();
      }
    }, 20);
  }
  $("#location_pick .location button").click(function () {
    let confirm_journey = $("#confirm_journey");
    confirm_journey.fadeIn();
    adventure_type = $(this).attr("type");
  });
  $(".no").click(function () {
    let confirm_journey = $("#confirm_journey");
    confirm_journey.fadeOut();
    game_mode = 1;
  });
  let info_pressed = false;
  let info_enemy_show_p = $(".info_enemy_show_p");
  $(".info_enemy_show").click(function () {
    switch (info_pressed) {
      case false:
        info_enemy_show_p.css("display", "flex");
        $(".change_buttons").css("display", "none");
        $(".attacks").css("display", "none");
        changed_pressed = false;
        info_pressed = true;
        attack_pressed = false;
        break;
      case true:
        info_enemy_show_p.css("display", "none");
        info_pressed = false;
        break;
    }
  });
  let changed_pressed = false;
  $(".change_buttons_button").click(function () {
    switch (changed_pressed) {
      case false:
        $(".change_buttons").css("display", "flex");
        $(".attacks").css("display", "none");
        info_enemy_show_p.css("display", "none");
        info_pressed = false;
        attack_pressed = false;
        changed_pressed = true;
        break;
      case true:
        $(".change_buttons").css("display", "none");
        changed_pressed = false;
        break;
    }
  });
  let attack_pressed = false;
  $(".attacks_button").click(function () {
    switch (attack_pressed) {
      case false:
        $(".attacks").css("display", "flex");
        $(".change_buttons").css("display", "none");
        info_enemy_show_p.css("display", "none");
        attack_pressed = true;
        changed_pressed = false;
        info_pressed = false;
        break;
      case true:
        $(".attacks").css("display", "none");
        attack_pressed = false;
        break;
    }
  });
});
