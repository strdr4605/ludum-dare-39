var PlanetLayer = cc.Layer.extend({
    ctor: function (planetsInfo) {
        this._super();
        this.planets = [];
        this.planetsAmount  = planetsInfo.length;
        this.planetsInfo = planetsInfo;
        this.init();
    },
    init: function () {

        for(var i = 0; i < this.planetsAmount; i++) {
            // console.log(this.planetsInfo[i].position);
            // console.log(this.planetsInfo[i].size);
            var planet = cc.Sprite.create(this.planetsInfo[i].name);
            planet.setPosition(this.planetsInfo[i].position);
            planet.setScale(this.planetsInfo[i].sizeScale);
            this.addChild(planet);
            this.planets.push(planet);
        }
    },
    move: function (angle) {
        angle += 90;
        var piAngle = angle/180 * Math.PI
        // cc.log('test' + angle);
        // cc.log('cos'+ Math.cos(piAngle));
        // cc.log('sin'+ Math.sin(piAngle));

        this.setPositionX(this.getPositionX() - kPlanetSpeed * Math.cos(piAngle));
        this.setPositionY(this.getPositionY() - kPlanetSpeed * Math.sin(piAngle));
    }
});