import GameScreen from "./gameScreen";
import GenericComponent from "./genericComponent";
import { Player } from "../types/types";

export default class Platform extends GenericComponent {
  dx: number;

  dy: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    dx: number,
    dy: number
  ) {
    super(x, y, width, height);
    this.dx = dx;
    this.dy = dy;
  }

  draw({ ctx }: GameScreen) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  platformGoDown() {
    this.y += this.dy;
  }

  isPlayerOnPlatform(player: Player) {
    const playerX = player.x;
    const playerY = player.y;
    const platformX = this.x;
    const platformY = this.y;
    const platformEdgeX = platformX + this.width;
    const platformEdgeY = platformY + this.height;
    const playerEdgeX = playerX + player.width;
    const playerEdgeY = playerY + player.height;

    return (
      platformX < playerX &&
      platformEdgeX > playerEdgeX &&
      playerEdgeY > player.y &&
      !player.isJumping()
    );
  }
}
