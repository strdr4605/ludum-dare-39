var StarsLayer = cc.Layer.extend({
  sprite: null,
  ctor: function (start, width, height) {
    this._super();
    this.init(start, width, height);
  },
  init: function (start, width, height) {
    this.spriteSize = new cc.Size(200, 200);
    this.starsSprites = [];
    this.createSprites(start, width, height);
  },
  createSprites: function (start, height, width) {
    for(var i = 0; i < height; i++) {
      var row = [];
      for(var j = 0; j < width; j++) {
        var starSprite = new cc.Sprite.create(res.Stars_gif);
        var position = {
          x: start.x + j * this.spriteSize.width,
          y: start.y + i * this.spriteSize.height
        };
        starSprite.setPosition(cc.p(position.x, position.y));
        starSprite.setAnchorPoint(cc.p(0, 0));
        this.addChild(starSprite);
        row.push(starSprite);
      }
      this.starsSprites.push(row);
    }
  },
  move: function (angle) {
      angle += 90;
      var piAngle = angle/180 * Math.PI
      this.setPositionX(this.getPositionX() - kStarsSpeed * Math.cos(piAngle));
      this.setPositionY(this.getPositionY() - kStarsSpeed * Math.sin(piAngle));
  }
});