var SpaceshipSprite = cc.Sprite.extend({
    energy: 100,
    ctor:function (spriteFrameName) {
        this._super(spriteFrameName);
    },
    changeEnergyBy: function(value) {
        this.energy += value;
    }
});
