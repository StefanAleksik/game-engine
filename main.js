import { draw } from "./game-engine/draw.js";
import { start } from "./game-engine/loop.js";

class Main {
  canvas;
  context;

  constructor() {
    this.init();
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    start(draw.bind(this, this.context));
  }
}

window.onload = new Main();
