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
                name : res.PlanetRed_png,
                position: new cc.Point(size.width / 5, size.height / 1.5),
                mass: 30
            },
            {
                name : res.PlanetBlue_png,
                position: new cc.Point(size.width / 1.05, size.height/1.2),
                mass: 50
            },
            {
                name : res.PlanetGreen_png,
                position: new cc.Point(size.width / 1.1, size.height / 6),
                mass: 20
            }

        ];
        this.planetLayer = new PlanetLayer(planetsInfo);

        this.spaceshipSprite = new SpaceshipSprite(res.Spaceship_png, new cc.Size(250,370), new cc.Size(4,5));
        this.spaceshipSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.spaceshipSprite.setScale(0.2);

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
        // cc.log('******************')
        var gravityForce = this.planetLayer.attract(this.spaceshipSprite);
        this.spaceshipSprite.applyForce(gravityForce);
        // cc.log('test' + this.spaceshipSprite.acceleration.x + "  " + this.spaceshipSprite.acceleration.y)
        if (this.input.isKeyPressed(this.input.motionType.Forward) && this.input.isKeyPressed(this.input.motionType.Left)) {
            this.spaceshipSprite.moveForwardAndLeft();
        } else if (this.input.isKeyPressed(this.input.motionType.Forward) && this.input.isKeyPressed(this.input.motionType.Right)) {
            this.spaceshipSprite.moveForwardAndRight();
        } else if (this.input.isKeyPressed(this.input.motionType.Forward)){
            this.spaceshipSprite.moveForward();
        }else if (this.input.isKeyPressed(this.input.motionType.Left)) {
            this.spaceshipSprite.rotateLeft();
        } else if (this.input.isKeyPressed(this.input.motionType.Right)) {
            this.spaceshipSprite.rotateRight();
        } else {
            this.spaceshipSprite.stop();
        }
        this.spaceshipSprite.applyAccelToVelocity();
        this.moveStarsAndPlanets();
        // cc.log('acceleration:  ' + this.spaceshipSprite.acceleration.x + "  " + this.spaceshipSprite.acceleration.y);
        // cc.log('velocity:  ' + this.spaceshipSprite.velocity.x + "  " + this.spaceshipSprite.velocity.y);
        this.spaceshipSprite.acceleration = cc.p(0, 0);
    },
    moveStarsAndPlanets: function() {
        this.planetLayer.move(this.spaceshipSprite);
        this.starLayer.move(this.spaceshipSprite);
    }

});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    }
});
