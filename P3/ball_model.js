var my_screen = document.getElementById('game_screen');
var context = my_screen.getContext('2d');
var centerX = my_screen.width / 2;
var centerY = my_screen.height / 2;
function draw_circle(canvas, context, centerX, centerY) {
    var radius = my_screen.height / 5;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
}
var my_button = document.getElementById('redraw_button');
my_button.onclick = function () {
    setInterval(function () { draw_circle(my_screen, context, centerX, centerY); }, 500);
    //draw_circle(my_screen, context);
};
document.onkeydown = function (event) {
    var name = event.key;
    var code = event.code;
    if (name == "ArrowRight") {
        centerX += 10;
    }
    if (name == "ArrowLeft") {
        centerX -= 10;
    }
};
