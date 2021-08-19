

    then = performance.now();
    // requestAnimationFrame(loop);

function loop () {
  now = performance.now();
  // checkInput(); -> use queue to store keys
  // update(now - then, game);
  // trigger event
  requestAnimationFrame(loop);
}

export class Game {

  start() {
    
  }
}
