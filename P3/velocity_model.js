var velocity_screen = document.getElementById('velocity_screen');
var simulation_context = velocity_screen.getContext('2d');
function draw_object(canvas, context, center, radius) {
    var centerX = Math.floor(center[0]);
    var centerY = Math.floor(center[1]);
    var r = radius;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
}
function update_coord(coords, v, t) {
    coords[0] = Math.floor(coords[0] + v[0] * t);
    coords[1] = Math.floor(coords[1] + v[1] * t);
}
var start_button = document.getElementById('start_button');
start_button.onclick = function () {
    var velocity_input = document.getElementById("vel");
    var velocity = parseFloat(velocity_input.value);
    var angle_input = document.getElementById("angle");
    var angle = parseFloat(angle_input.value);
    var center = [0, 0];
    var v = [0, 0];
    var t = 0; // initial time
    var r = 10; //circle radius
    var dt = 800; //time interval (ms)
    v[0] = velocity * Math.cos(Math.PI * angle / 180);
    v[1] = velocity * Math.sin(Math.PI * angle / 180);
    setInterval(function () {
        // coordinate update
        t = (t + dt) / dt;
        update_coord(center, v, t);
        draw_object(velocity_screen, simulation_context, center, r);
    }, dt);
};
