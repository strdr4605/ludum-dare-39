var PlanetLayer = cc.Layer.extend({
    ctor: function (planetsInfo) {
        this._super();
        this.planets = [];
        this.planetsAmount  = planetsInfo.length;
        this.planetsInfo = planetsInfo;
        this.totalForce = cc.p(0, 0);
        this.init();
    },
    init: function () {

        for(var i = 0; i < this.planetsAmount; i++) {
            var planet = new Planet(this.planetsInfo[i]);
            this.addChild(planet);
            this.planets.push(planet);
        }
    },
    attract: function (Obj) {
        this.totalForce = cc.p(0, 0);
        for(var i = 0; i < this.planetsAmount; i++) {
            cc.pAddIn(this.totalForce, this.planets[i].attract(Obj))
        }
        return this.totalForce;
    },
    move: function (spaceship) {
        for(var i = 0; i < this.planetsAmount; i++) {
            var planet = this.planets[i];
            planet.setPosition(cc.p(planet.getPositionX() - kPlanetSpeed * spaceship.velocity.x,
                planet.getPositionY() - kPlanetSpeed * spaceship.velocity.y));
        }
    }
});