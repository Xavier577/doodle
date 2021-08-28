import Player from "../components/player";

export default function controls(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  // eslint-disable-next-line default-case
  switch (key) {
    case "arrowleft" || "left":
      Player.moveLeft();
      break;
    case "arrowright" || "right":
      Player.moveRight();
      break;
  }
}
