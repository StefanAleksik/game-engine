export function draw(context) {
  let randomColor = Math.random() > 0.5 ? "#ff8080" : "#0099b0";
  context.fillStyle = randomColor;
  context.fillRect(100, 50, 200, 175);
}
