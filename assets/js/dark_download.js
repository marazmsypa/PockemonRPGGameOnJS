let canvas_download = document.getElementById("download_canvas");
let context_download = canvas_download.getContext("2d");
canvas_download.width = width_screen;
canvas_download.height = height_screen;
let size_w = 0;
let size_h = 0;
let size_x = width_screen / 2;
let size_y = height_screen / 2;
let type_of_moving = 1;
let speed = 2;
let zagryz_img = new Image();
zagryz_img.src = "assets/img/Zagryz.png";
function download() {
  type_of_moving = 1;
  if (type_of_moving == 1) {
    canvas_download.style = "display: block";
    context_download.drawImage(zagryz_img, size_x, size_y, size_w, size_h);
    size_x -= 2;
    size_y -= 2;
    size_w += 2;
    size_h += 2;
    requestAnimationFrame(download);
    if (size_w > 2000) {
      type_of_moving = 0;
    }
  }
  if (type_of_moving == 0) {
    canvas_download.style = "display: block";
    context_download.drawImage(zagryz_img, size_x, size_y, size_w, size_h);
    size_x += 2;
    size_y += 2;
    size_w -= 2;
    size_h -= 2;
    requestAnimationFrame(download);
    if (size_w < 0) {
      type_of_moving = 3;
      canvas_download.style = "display: none";
    }
  }
}
