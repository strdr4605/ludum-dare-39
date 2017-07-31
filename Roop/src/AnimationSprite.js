var AnimationSprite = cc.Sprite.extend({
    ctor: function (fileName, frameSize, frames) {
        this._super();
        this.frameSize = frameSize;
        this.actions = [];
        for (var i = 0; i < frames.width; ++i)
        {
            var spriteFrames = [];
            var animationFrames = []
            for(var j = 0; j < frames.height; ++j)
            {
                spriteFrames.push(new cc.SpriteFrame(fileName,
                    cc.rect(j * frameSize.width, i * frameSize.height,
                        frameSize.width, frameSize.height)));
                var animFrame = new cc.AnimationFrame(spriteFrames[j], 0.05);

                animationFrames.push(animFrame);
            }
            var animation = new cc.Animation(animationFrames,1);
            var animate = cc.animate(animation);
            animate.setTag(i);
            this.actions.push(animate);
        }
        //console.log(animationFrames);
    }
});