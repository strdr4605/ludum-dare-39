var res = {
    HelloWorld_png : "res/HelloWorld.png",
    PlanetRed_png : "res/planet_red_708x708.png",
    PlanetBlue_png : "res/planet_blue_200x200.png",
    PlanetGreen_png : "res/planet_green_512x512.png",
    Spaceship_png: "res/spaceship.png",
    Stars_gif: "res/bg_200x200.gif"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var spaceshipAngleVelocity = 5;

var kStarsSpeed = 1;
var kPlanetSpeed = 5;
var kFuelAcceleration = 0.01;
var kG = 0.5;

