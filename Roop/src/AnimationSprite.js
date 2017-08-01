var AnimationSprite = cc.Sprite.extend({
    ctor: function (fileName, frameSize, frames) {
        this._super();
        this.frameSize = frameSize;
        this.actions = [];
        for (var i = 0; i < frames.width; ++i)
        {
            var animationFrames = [];
            for(var j = 0; j < frames.height; ++j)
            {
                spriteFrame = new cc.SpriteFrame
                (
                    fileName,
                    cc.rect(
                        j * frameSize.width,
                        i * frameSize.height,
                        frameSize.width,
                        frameSize.height
                    )
                );
                animationFrames.push(new cc.AnimationFrame(spriteFrame, 1, null));
            }
            var animation = new cc.Animation(animationFrames, 0.2);
            var animate = new cc.Animate(animation);
            animate.setTag(i);
            this.actions.push(animate);
        }

        // for multiple 2 button press//will change it when new png image will be made
        for (var i = 1; i < frames.width - 1; ++i)
        {
            var animationFrames = [];
            for(var j = 0; j < frames.height; ++j)
            {
                spriteFrame1 = new cc.SpriteFrame
                (
                    fileName,
                    cc.rect(
                        j * frameSize.width,
                        i * frameSize.height,
                        frameSize.width,
                        frameSize.height
                    )
                );
                spriteFrame2 = new cc.SpriteFrame
                (
                    fileName,
                    cc.rect(
                        j * frameSize.width,
                        3 * frameSize.height,
                        frameSize.width,
                        frameSize.height
                    )
                );
                animationFrames.push(new cc.AnimationFrame(spriteFrame1, 1, null));
                animationFrames.push(new cc.AnimationFrame(spriteFrame2, 1, null));
            }
            var animation = new cc.Animation(animationFrames, 0.05);
            var animate = new cc.Animate(animation);
            animate.setTag(i+3);
            this.actions.push(animate);
        }
    }
});
