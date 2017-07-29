var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var starshipLayer = new SpaceshipLayer();
        this.addChild(starshipLayer);
    }
});
