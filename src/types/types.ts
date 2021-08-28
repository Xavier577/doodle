import GameScreen from "../components/gameScreen";

export interface Components {
  x: number;
  y: number;
  speed: number;
  width: number;
  height: number;
  dx: number;
  dy: number;
}

export interface Player {
  x: number;
  y: number;
  speed: number;
  width: number;
  height: number;
  dx: number;
  dy: number;
  avatar: HTMLImageElement;
  draw: ({ ctx }: GameScreen) => void;
}
