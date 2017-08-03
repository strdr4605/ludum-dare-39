var Input = function () {
    this.motionType = {
        Left: 37,
        Forward: 38,
        Right: 39
    };

    var keysPressed = [];

    this.addKey = function (key) {
        keysPressed.push(key);
    };

    this.removeKey = function (key) {
        keysPressed.splice(keysPressed.indexOf(key), 1)
    };
    this.isKeyPressed = function (key) {
        return keysPressed.indexOf(key) != -1;
    };

    this.numberKeysPressed = function () {
        return keysPressed.length;
    }

    this.getKeyPressed = function () {
        return keysPressed;
    }
};