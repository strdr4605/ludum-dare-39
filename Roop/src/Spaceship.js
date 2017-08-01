var SpaceshipSprite = AnimationSprite.extend({
    energy: 100,
    ctor:function (spriteFrameName, frameSize, frames) {
        this._super(spriteFrameName, frameSize, frames);
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
    },
    moveForwardAndLeft: function() {
        this.setRotation(this.getRotation() - spaceshipAngleVelocity);
        if(!this.getActionByTag(4)){
            this.stopAllActions();
            this.runAction(this.actions[4].repeatForever());
        }
    },
    moveForwardAndRight: function() {
        this.setRotation(this.getRotation() + spaceshipAngleVelocity);
        if(!this.getActionByTag(5)){
            this.stopAllActions();
            this.runAction(this.actions[5].repeatForever());
        }
    },
    stop: function() {
        this.stopAllActions();
        this.runAction(this.actions[0].repeatForever());
    }

});
