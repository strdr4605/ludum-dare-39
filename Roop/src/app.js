var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        this._super();
        var size = cc.winSize;

        this.spaceshipSprite = new SpaceshipSprite(res.Spaceship_png);
        this.spaceshipSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.spaceshipSprite.setScale(0.3);
        this.addChild(this.spaceshipSprite, kZindexSpaceship);
    },
    onEnter: function() {
        this._super();
        that = this;
        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
        	cc.eventManager.addListener({
        		event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key, event) {
                    if(key == 37) {
                        that.spaceshipSprite.setRotation(that.spaceshipSprite.getRotation() - spaceshipAngleVelocity);
                    }else if(key == 39) {
                        that.spaceshipSprite.setRotation(that.spaceshipSprite.getRotation() + spaceshipAngleVelocity);
                    }
        		}
        	}, this);
        }
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    }
});
