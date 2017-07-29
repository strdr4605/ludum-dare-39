var SpaceshipLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        //    super init first
        this._super();

        /////////////////////////////
        //    add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var angleVelocity = 5;
        var sprite = new cc.Sprite(res.Spaceship_png);

        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);

        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
        	cc.eventManager.addListener(
        	{
        		event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key, event)
        		{
                    if(key == 37) {
                        sprite.setRotation(sprite.getRotation() - angleVelocity);
                    }else if(key == 39) {
                        sprite.setRotation(sprite.getRotation() + angleVelocity);
                    }
        		}
        	}, this);
        }

        return true;
    }
});
