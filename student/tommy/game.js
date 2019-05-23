< !DOCTYPE html >

	<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta charset="utf-8" />
	<title></title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js"></script>
	<script src="p5.play.js"></script>

	</head>
	<body>
	<script>
var player;
var background1;
var SCENE_W = 3280;
var SCENE_W = 2140;
function setup() {
	createCanvas(600, 400)
	player = createSprite(300, 200, 25, 50);
	background1 = loadImage('https://cdn.vox-cdn.com/uploads/chorus_asset/file/10675355/The_Verge_Cubeometry_Wallpaper_Landscape.0.png');
}
function draw() {
	camera.position.x = player.position.x;
	camera.position.y = player.position.y;
	//background(0);
			   
	image(background1,0,0);
	drawSprite(player);
	controls();
	if (mouseIsPressed) {
		camera.zoom = 0.5;
	} else {
		camera.zoom = 1;
	}
}
function controls() {
	if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
		player.position.y += -2;
	} else if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
		player.position.x += -2;
	} else if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
		player.position.y += +2;
	} else if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
		player.position.x += +2;
	}
}
</script>
	</body>
	</html>