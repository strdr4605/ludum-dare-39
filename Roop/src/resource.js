var res = {
    HelloWorld_png : "res/HelloWorld.png",
    PlanetRed_png : "res/planet_red_708x708.png",
    Spaceship_png: "res/spaceship1.png",
    RedPlanrt_png: "res/planet_red_708x708.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var kZindexBg = 0;
var kZindexSpaceship = 2;

var spaceshipAngleVelocity = 5;
