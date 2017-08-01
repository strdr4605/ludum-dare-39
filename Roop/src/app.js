var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var size = cc.winSize;
        this.spaceshipSprite = new SpaceshipSprite(res.Spaceship_png, new cc.Size(250,370), new cc.Size(4,5));
        this.spaceshipSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.spaceshipSprite.setScale(0.4);
        this.addChild(this.spaceshipSprite);

        this.scheduleUpdate();

    },
    onEnter: function() {
        this._super();
        var that = this;
        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
        	cc.eventManager.addListener({
        		event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key, event) {
        		    // cc.log(key);
                    if(key == 37) {
                        that.spaceshipSprite.rotateLeft();
                    }else if(key == 39) {
                        that.spaceshipSprite.rotateRight();
                    }else if(key == 38) {
                        that.spaceshipSprite.moveForward();
                    }
        		},
                onKeyReleased: function(key, event) {
                    that.spaceshipSprite.stop();
                }
        	}, this);
        }
    },
    update: function(dt) {
        // cc.log(dt);
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    }
});
