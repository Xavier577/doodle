import $ from "jquery";
import GameScreen from "./components/gameScreen";
import Grid from "./components/grid";
import Player from "./components/player";
import Platform from "./components/platform";
import Game from "./modules/game";
import controls from "./modules/controls";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = <HTMLDivElement>document.getElementById("app");
  const gameScreen = new GameScreen(0, 0, 600, 600, appContainer);
  const game = new Game(Player, gameScreen);
  game.start();
  game.run();
});

document.addEventListener("keyup", controls);
