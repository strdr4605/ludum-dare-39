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
        // for(var i = 0; i < this.planetsAmount; i++) {
        //     this.planets[i].setPositionY(this.planets[i].getPositionY() - 1);
        // }
        this.setPositionY(this.getPositionY() - 1 * Math.cos(angle));
        this.setPositionX(this.getPositionX() - 1 * Math.sin(angle));
    }
});