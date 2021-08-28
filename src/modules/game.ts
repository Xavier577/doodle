import GameScreen from "../components/gameScreen";
import Grid from "../components/grid";
import Platform from "../components/platform";
import { Player } from "../types/types";

export default class Game {
  player: Player;

  score: number;

  screen: GameScreen;

  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  gridColor: string;

  platforms: Platform[];

  platformCoordinates: { x: number; y: number };

  isPlayerJumping: boolean;

  constructor(player: Player, screen: GameScreen) {
    this.player = player;
    this.score = 0;
    this.screen = screen;
    this.ctx = screen.ctx;
    this.canvas = screen.canvas;
    this.gridColor = "#65960a81";
    this.platforms = [];
    this.platformCoordinates = { x: 0, y: 0 };
    this.isPlayerJumping = false;
    this.run = this.run.bind(this);
  }

  public start() {
    this.screen.render();
    Grid(this.screen).draw(this.gridColor, 0.02);
  }

  public run() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // rember to change the thrid (optional) argument to 0.02 after developing
    Grid(this.screen).draw(this.gridColor);
    this.renderPlayer();
    this.drawPlatform();
    // this.movePlatform();
    const recursiveGameRender = requestAnimationFrame(this.run);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isgameOver() ? (this.player.dy *= -1) : null;
    // cancelAnimationFrame(recursiveGameRender)
  }

  public drawPlatform() {
    this.createPlatform();
    this.platforms.forEach((platform) => platform.draw(this.screen));
  }

  public movePlatform() {
    if (this.platforms.length > 0) {
      // eslint-disable-next-line no-return-assign
      this.platforms.forEach((platform) => (platform.y += platform.dy));
    }
  }

  private renderPlayer() {
    this.player.draw?.(this.screen);
    this.player.y -= this.player.dy;

    if (this.player.y + this.player.height < this.canvas.height / 5) {
      this.player.dy *= -1;
    }
  }

  private isgameOver() {
    return this.player.y + this.player.height > this.canvas.height;
  }

  public createPlatform() {
    // this.platform.platformGoDown();
    const verticalSpacing = Math.ceil(0.1 * this.canvas.height);
    const horizontaSpacing = Math.ceil(0.1 * this.canvas.width);
    const platformCount = this.canvas.height / verticalSpacing;
    let i = 0;

    // eslint-disable-next-line no-plusplus
    for (i; i < platformCount; i++) {
      this.platformCoordinates.x =
        Math.random() * (this.canvas.width - horizontaSpacing);
      this.platformCoordinates.y += verticalSpacing;
      const { x, y } = this.platformCoordinates;
      const newPlatform = new Platform(x, y, 60, 20, 1, 1);
      this.platforms.push(newPlatform);
    }
  }
}
