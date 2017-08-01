var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var size = cc.winSize;
        this.input = new Input();

        this.startStarLayer = {
            x: 0,
            y: 0
        };
        this.starLayer = new StarsLayer(this.startStarLayer, 10, 10);

        var planetsInfo = [
            {
                name : res.RedPlanet_png,
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
        		    if(! that.input.isKeyPressed(key))
        		        that.input.addKey(key);
        		},
                onKeyReleased: function(key, event) {
        		    if(that.input.isKeyPressed(key))
        		        that.input.removeKey(key);
                }
        	}, this);
        }
    },
    update: function(dt) {
        if (this.input.isKeyPressed(this.input.motionType.Forward) && this.input.isKeyPressed(this.input.motionType.Left)) {
            this.spaceshipSprite.moveForwardAndLeft();
            this.moveStarsAndPlanets();
        } else if (this.input.isKeyPressed(this.input.motionType.Forward) && this.input.isKeyPressed(this.input.motionType.Right)) {
            this.spaceshipSprite.moveForwardAndRight();
            this.moveStarsAndPlanets();
        } else if (this.input.isKeyPressed(this.input.motionType.Forward)){
            this.spaceshipSprite.moveForward();
            this.moveStarsAndPlanets();
        }else if (this.input.isKeyPressed(this.input.motionType.Left)) {
            this.spaceshipSprite.rotateLeft();
        } else if (this.input.isKeyPressed(this.input.motionType.Right)) {
            this.spaceshipSprite.rotateRight();
        } else {
            this.spaceshipSprite.stop();
        }
    },
    moveStarsAndPlanets: function() {
        this.planetLayer.move(-this.spaceshipSprite.getRotation());
        this.starLayer.move(-this.spaceshipSprite.getRotation());
    }

});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    }
});
