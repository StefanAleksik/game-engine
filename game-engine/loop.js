function raf(fn) {
  return window.requestAnimationFrame(function () {
    fn();
  });
}

export function start(fn) {
  return raf(function tick() {
    fn();
    raf(tick);
  });
}
