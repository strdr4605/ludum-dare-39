var Planet = cc.Sprite.extend({
    ctor: function (PlanetInfo) {
        this._super();
        this.mass = PlanetInfo.mass;
        this.sprite = new cc.Sprite(PlanetInfo.name);
        this.setPosition(PlanetInfo.position);
        this.setScale(PlanetInfo.mass/100);
        this.addChild(this.sprite);
    },
    attract: function(Obj) {
        var position = this.getPosition();
        // cc.log(position)
        var size = cc.winSize;
        var force = cc.pSub(cc.p(size.width/2, size.height/2), position);
        // cc.log('force: ' +force.x + "   " + force.y);
        var distance = cc.pLength(force);
        // cc.log('distance' + distance);
        if(distance > 1000){
            force = cc.p(0, 0);
        } else {
            if (distance < 150)
                distance = 150;
            cc.pNormalizeIn(force);
            // cc.log('normalize' + force.x + '  ' + force.y);
            var strength = (kG * this.mass * Obj.mass) / Math.pow(distance, 2);
            // cc.log('strength' + strength);

            cc.pMultIn(force, strength);
            // cc.log('force mult str' + force.x + '  ' + force.y);

        }
        cc.log('force: ' +force.x + "   " + force.y);
        return force;
    }
});