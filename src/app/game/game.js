
var _gameState = { timer: 0, order: [] };
var _requestId, _then, _now, _keys;

function start() {
  stop();
  window.onkeypress = (e) => { _keys.push(e.key); };
  _gameState.timer = 10000;
  _gameState.order = createOrder();
  _keys = [];
  _then = performance.now();
  _requestId = requestAnimationFrame(loop);
}

function stop() {
  if (_requestId) {
    cancelAnimationFrame(_requestId);
  }
}

function loop () {
  _now = performance.now();
  var dt = _now - _then;
  _then = _now;

  // read input
  for (var i = 0; i < _keys.length; i++) {
    var key = _keys[i];
    var idx = _gameState.order.indexOf(key);
    // update order
    if (idx > -1) {
      _gameState.order.splice(idx, 1);
    }
  }
  // reset input
  _keys = [];

  // check order status
  if (_gameState.order.length == 0) {
    console.log('order complete');
    // reset timer & create new order
    _gameState.timer = 10000;
    _gameState.order = createOrder();
  } else {
    // reduce timer
    _gameState.timer -= dt;
  }

  // check timer
  if (_gameState.timer <= 0) {
    console.log('you loose');
  } else {
    _requestId = requestAnimationFrame(loop);
  }
}

function createOrder() {
  var array = [], orderLength = 3 + (Math.random() * 3 | 0);
  for (var i = 0; i < orderLength; i++) {
    var letterCode = 97 + (Math.random() * 26 | 0);
    array.push(String.fromCharCode(letterCode));
  }
  console.log('createOrder', array);
  return array;
}

export var Game = {
  start: start,
  stop: stop
};
