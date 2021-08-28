import GameScreen from "./gameScreen";

const Player = {
  x: 300,
  y: 540,
  speed: 0,
  width: 60,
  height: 60,
  dx: 60,
  dy: 2,
  isJumping: function () {
    return Math.sign(this.dy) === 1;
  },
  avatar: <HTMLImageElement>document.getElementById("doodler"),
  draw: function ({ ctx }: GameScreen) {
    ctx.drawImage(this.avatar, this.x, this.y, this.width, this.height);
  },
  moveLeft: function () {
    this.x -= this.dx;
  },
  moveRight: function () {
    this.x += this.dx;
  }
};

export default Player;
