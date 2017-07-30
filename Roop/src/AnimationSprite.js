var AnimationSprite = cc.Sprite.extend({
    ctor: function (fileName, frameSize, frames) {
        this.frameSize = frameSize;
        this.actions = [];
        for (var i = 0; i < frames.width; ++i)
        {
            var spriteFrames = [];
            var animationFrames = []
            for(var j = 0; j < frames.height; ++j)
            {
                spriteFrames.push(new cc.SpriteFrame("../res/" + fileName,
                    cc.rect(j * frameSize.width, i * frameSize.height,
                        frameSize.width, frameSize.height)));
                var animFrame = new cc.AnimationFrame(spriteFrames[j], 0.05);

                animationFrames.push(animFrame);
            }
            var animation = new cc.Animation(animationFrames,1);
            this.actions.push(cc.animate(animation));
        }
        //console.log(animationFrames);
    }
});