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
    const platformLeft = this.x;
    const platformRight = this.x + this.width;
    const platformY = this.y;
    const playerY = player.y + player.height;
    const playerLeft = player.x + this.width;
    const playerRight = player.x + this.width;

    return (
      platformLeft <= playerLeft &&
      platformRight >= playerRight &&
      platformY === playerY
    );
  }
}
