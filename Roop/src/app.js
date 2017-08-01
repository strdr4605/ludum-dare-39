var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var size = cc.winSize;
        this.keysPressed = [];

        this.startStarLayer = {
            x: 0,
            y: 0
        };
        this.starLayer = new StarsLayer(this.startStarLayer, 10, 10);

        var planetsInfo = [
            {
                name : res.RedPlanrt_png,
                position: new cc.Point(size.width / 2, size.height / 2),
                sizeScale: 0.3
            }
        ];
        this.planetLayer = new PlanetLayer(planetsInfo);

        this.spaceshipSprite = new SpaceshipSprite(res.Spaceship_png, new cc.Size(250,370), new cc.Size(4,5));
        this.spaceshipSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.spaceshipSprite.setScale(0.4);

        this.addChild(this.starLayer);
        this.addChild(this.planetLayer);
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
        		    if(that.keysPressed.indexOf(key) == -1){
        		        that.keysPressed.push(key);
                    }
        		},
                onKeyReleased: function(key, event) {
                    that.keysPressed.splice(that.keysPressed.indexOf(key), 1)
                }
        	}, this);
        }
    },
    update: function(dt) {
        cc.log(this.keysPressed);
        if(this.keysPressed.length != 0) {
            if (this.keysPressed.indexOf(38) != -1) {
                if (this.keysPressed.indexOf(37) != -1) {
                    this.spaceshipSprite.moveForwardAndLeft();
                } else if (this.keysPressed.indexOf(39) != -1) {
                    this.spaceshipSprite.moveForwardAndRight();
                } else {
                    this.spaceshipSprite.moveForward();
                }
            } else if (this.keysPressed.indexOf(37) != -1) {
                this.spaceshipSprite.rotateLeft();
            } else if (this.keysPressed.indexOf(39) != -1) {
                this.spaceshipSprite.rotateRight();
            }
        } else {
            this.spaceshipSprite.stop();
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
