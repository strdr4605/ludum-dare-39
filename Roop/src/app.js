var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var size = cc.winSize;
        this.startStarLayer = {
            x: 0,
            y: 0
        };
        this.starLayer = new StarsLayer(this.startStarLayer, 10, 10);
        this.addChild(this.starLayer);
        var planetsInfo = [
            {
                name : res.RedPlanrt_png,
                position: new cc.Point(size.width / 2, size.height / 2),
                sizeScale: 0.3
            }
        ];
        this.planetLayer = new PlanetLayer(planetsInfo);
        this.addChild(this.planetLayer);

        this.spaceshipSprite = new SpaceshipSprite(res.Spaceship_png, new cc.Size(250,370), new cc.Size(4,5));
        console.log(this.spaceshipSprite);
        this.spaceshipSprite.setPosition(new cc.Point(size.width / 2, size.height / 2));
        this.spaceshipSprite.setScale(2);
        this.addChild(this.spaceshipSprite);

        // var animationSprite = new AnimationSprite("meteors_128x128_8x8.png", new cc.Size(128,128), new cc.Size(8,8));
        // this.sprite.runAction(animationSprite.actions[0]);
    },
    onEnter: function() {
        this._super();
        var that = this;
        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
        	cc.eventManager.addListener({
        		event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key, event) {
        		    switch(key) {
                        case 37:
                            that.spaceshipSprite.setRotation(that.spaceshipSprite.getRotation() - spaceshipAngleVelocity);
                            if(that.spaceshipSprite.getActionByTag(2) === null) {
                                that.spaceshipSprite.runAction(that.spaceshipSprite.actions[2]);
                            }
                            break;
                        case 38:
                            //console.log(that.spaceshipSprite.getRotation());
                            that.planetLayer.move(that.spaceshipSprite.getRotation() + 90);
                            that.starLayer.move(that.spaceshipSprite.getRotation() + 90);
                            if(that.spaceshipSprite.getActionByTag(3) === null) {
                                that.spaceshipSprite.runAction(that.spaceshipSprite.actions[3]);
                            }
                            break;
                        case 39:
                            that.spaceshipSprite.setRotation(that.spaceshipSprite.getRotation() + spaceshipAngleVelocity);
                            if(that.spaceshipSprite.getActionByTag(1) === null) {
                                that.spaceshipSprite.runAction(that.spaceshipSprite.actions[1]);
                            }
                            break;
                    }
        		}
        	}, this);
        	cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: function(key, event) {
                    switch(key) {
                        case 37:
                            if(that.spaceshipSprite.getActionByTag(2) != null) {
                                that.spaceshipSprite.stopAction(that.spaceshipSprite.actions[2]);
                            }
                            break;
                        case 38:
                            //console.log(that.spaceshipSprite.getRotation());
                            if(that.spaceshipSprite.getActionByTag(0) != null) {
                                that.spaceshipSprite.stopAction(that.spaceshipSprite.actions[3]);
                            }
                            break;
                        case 39:
                            if(that.spaceshipSprite.getActionByTag(1) != null) {
                                that.spaceshipSprite.stopAction(that.spaceshipSprite.actions[1]);
                            }
                            break;
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
