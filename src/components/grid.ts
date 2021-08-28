import GameScreen from "./gameScreen";

const drawVerticalLines = (
  { ctx, canvas: { width, height } }: GameScreen,
  color?: string,
  fraction = 0.1
) => {
  const spacing = Math.ceil(fraction * width);
  let i = spacing;
  for (i; i < width; i += spacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.strokeStyle = color || "#000000";
    ctx.stroke();
    ctx.closePath();
  }
};

const drawHorizontalLines = (
  { ctx, canvas: { width, height } }: GameScreen,
  color?: string,
  fraction = 0.1
) => {
  const spacing = Math.ceil(fraction * height);
  let i = spacing;
  for (i; i < height; i += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.strokeStyle = color || "#000000";
    ctx.stroke();
    ctx.closePath();
  }
};

export default function Grid(screen: GameScreen) {
  return {
    draw: (color?: string, fraction = 0.1) => {
      drawVerticalLines(screen, color, fraction);
      drawHorizontalLines(screen, color, fraction);
    }
  };
}
