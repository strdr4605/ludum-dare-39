var SpaceshipSprite = AnimationSprite.extend({
    energy: 100,
    ctor:function (spriteFrameName, frameSize, frames) {
        this._super(spriteFrameName, frameSize, frames);
    },
    changeEnergyBy: function(value) {
        this.energy += value;
    }
});
