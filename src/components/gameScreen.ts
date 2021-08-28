import GenericComponent from "./genericComponent";

export default class GameScreen extends GenericComponent {
  parentElement: HTMLElement;

  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    parentElement: HTMLElement
  ) {
    super(x, y, width, height);
    this.parentElement = parentElement;
    this.canvas = <HTMLCanvasElement>document.createElement("canvas");
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  }

  public render() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.parentElement.append(this.canvas);
  }
}
