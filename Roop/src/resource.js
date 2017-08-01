var res = {
    HelloWorld_png : "res/HelloWorld.png",
    PlanetRed_png : "res/planet_red_708x708.png",
    Spaceship_png: "res/spaceship.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var spaceshipAngleVelocity = 5;
