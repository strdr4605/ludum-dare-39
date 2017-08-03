var SpaceshipSprite = AnimationSprite.extend({
    ctor:function (spriteFrameName, frameSize, frames) {
        this._super(spriteFrameName, frameSize, frames);
        this.energy = 100;
        this.mass = 5;
        this.velocity = cc.p(0, 0);
        this.acceleration = cc.p(0, 0);
        this.runAction(this.actions[0].repeatForever());
    },
    changeEnergyBy: function(value) {
        this.energy += value;
    },
    rotateLeft: function() {
        this.setRotation(this.getRotation() - spaceshipAngleVelocity);
        if(!this.getActionByTag(2)){
            this.stopAllActions();
            this.runAction(this.actions[2].repeatForever());
        }
    },
    rotateRight: function() {
        this.setRotation(this.getRotation() + spaceshipAngleVelocity);
        if(!this.getActionByTag(1)){
            this.stopAllActions();
            this.runAction(this.actions[1].repeatForever());
        }
    },
    moveForward: function() {
        if(!this.getActionByTag(3)){
            this.stopAllActions();

            this.runAction(this.actions[3].repeatForever());
        }
        this.giveFuel();
    },
    moveForwardAndLeft: function() {
        this.setRotation(this.getRotation() - spaceshipAngleVelocity);
        if(!this.getActionByTag(4)){
            this.stopAllActions();
            this.runAction(this.actions[4].repeatForever());
        }
        this.giveFuel();
    },
    moveForwardAndRight: function() {
        this.setRotation(this.getRotation() + spaceshipAngleVelocity);
        if(!this.getActionByTag(5)){
            this.stopAllActions();
            this.runAction(this.actions[5].repeatForever());
        }
        this.giveFuel();
    },
    stop: function() {
        this.stopAllActions();
        this.runAction(this.actions[0].repeatForever());
    },
    giveFuel: function () {
        var angle = -this.getRotation() + 90;
        var piAngle = angle/180 * Math.PI;
        cc.pAddIn(this.acceleration,cc.p(Math.cos(piAngle) * kFuelAcceleration, Math.sin(piAngle) * kFuelAcceleration));
    },
    applyForce: function (force) {
        cc.log('accel before ' + this.acceleration.x + '  ' + this.acceleration.y)
        cc.pSubIn(this.acceleration, force);
        cc.log('accel after ' + this.acceleration.x + '  ' + this.acceleration.y)
    },
    applyAccelToVelocity: function () {
        cc.pAddIn(this.velocity, this.acceleration);
    }

});
