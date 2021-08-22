import { CUSTOMERS, RECIPES } from '../enum';

var gameState = {
  commands: [],
  activeCommand: 0,
  money: 0
}

var gameLoop = {
  requestId: 0,
  then: 0,
  now: 0,
  keys: [],
  events: [],
  timerNewCommand: 0,
  timerOneSecond: 0
}

function start() {
  stop();
  window.onkeypress = (e) => { gameLoop.keys.push(e.key); };
  gameState.commands = [createCommand()];
  gameState.activeCommand = 0;
  gameState.newCustomerTimer = 0;
  gameLoop.keys = [];
  gameLoop.events = [];
  gameLoop.then = performance.now();
  gameLoop.requestId = requestAnimationFrame(loop);
}

function stop() {
  if (gameLoop.requestId) {
    gameLoop.requestId = cancelAnimationFrame(gameLoop.requestId);
  }
}

function loop () {
  gameLoop.now = performance.now();
  var dt = gameLoop.now - gameLoop.then;
  gameLoop.then = gameLoop.now;
  gameLoop.timerOneSecond += dt;

  // read input
  for (var i = 0; i < gameLoop.keys.length; i++) {
    var key = gameLoop.keys[i];
    if (key == ' ') { console.log(gameState, gameLoop); stop(); return; }
    if (key == 'Enter') {
      // check command status
      var command = gameState.commands[gameState.activeCommand];
      if (command && command.step == 3) {
        command.step++;
      }
    } else {
      var code = key.charCodeAt(0);
      if (code > 47 && code < 58) {
        // number
        var int = parseInt(key);
        if (int > 0 && int < 10) {
          // update active command
          var activeCommand = int - 1;
          if (gameState.activeCommand != activeCommand) {
            gameState.activeCommand = activeCommand;
            gameLoop.events.push({ type: 'ACTIVATE_COMMAND', args: [activeCommand] });
          }
        }
      } else if (code > 96 && code < 123) {
        // lowercase letter
        var command = gameState.commands[gameState.activeCommand];
        if (command) {
          // find key in current command
          var idx = command.keys.indexOf(key);
          if (idx > -1) {
            var s = command.step, r = command.recipe;
            // find item based on step & key
            var item = s == 0 ? r.shape : s == 1 ? r.ingredients.find(e => e.key == key) : r.decorations.find(e => e.key == key);
            gameLoop.events.push({ type: 'ADD_ITEM', args: [gameState.activeCommand, item]});
            command.keys.splice(idx, 1);
            // if step is complete
            if (command.keys.length == 0) {
              command.step++;
            gameLoop.events.push({ type: 'NEXT_STEP', args: [gameState.activeCommand]});
              // get next set of keys
              command.keys = command.step == 1 ? getIngredientKeys(r) : command.step == 2 ? getDecorationKeys(r) : [];
              // if decorations is empty, skip step
              if (command.step == 2 && command.keys.length == 0) {
                command.step++;
                gameLoop.events.push({ type: 'NEXT_STEP', args: [gameState.activeCommand]});
              }
            }
          }
        }
      }
    }
  }
  // reset input
  gameLoop.keys = [];

  // check all commands status
  for (var i = 0; i < 9; i++) {
    var command = gameState.commands[i];
    if (command) {
      if (command.step == 4) {
        // remove command, increase money
        gameState.money += 10;
        gameState.commands[i] = undefined;
        // both event could be merge for performance
        gameLoop.events.push({ type: 'REMOVE_COMMAND', args: [i] });
        gameLoop.events.push({ type: 'UPDATE_MONEY', args: [gameState.money] });
      } else {
        // decrease command timer
        command.timer -= dt;
        if (command.timer <= 0) {
          // remove command, decrease money
          gameState.money -= 10;
          gameState.commands[i] = undefined;
          // (same) both event could be merge for performance
          gameLoop.events.push({ type: 'REMOVE_COMMAND', args: [i]});
          gameLoop.events.push({ type: 'UPDATE_MONEY', args: [gameState.money] });
        }
      }
    }
  }

  // add new command
  gameLoop.timerNewCommand += dt;
  if ((Math.random() > Math.pow(.999, (gameLoop.timerNewCommand - 5000) * 0.001))) {
    var commandCount = gameState.commands.filter(e => !!e).length;
    if (commandCount < 10) {
      // create new customer
      var command = createCommand();
      var idx = gameState.commands.findIndex(c => !c);
      if (idx > -1) {
        gameState.commands[idx] = command;
      } else {
        gameState.commands.push(command);
      }
      gameLoop.timerNewCommand = 0;
      gameLoop.events.push({ type: 'ADD_COMAND', args: [ommand.customer, command.recipe] });
    }
  }

  // refresh command timer
  if (gameLoop.timerOneSecond >= 1000) {
    // send refresh timer
    var timers = [];
    for (var i = 0; i < 9; i++) {
      var command = gameState.commands[i];
      timers.push(command ? command.timer : undefined);
    }
    gameLoop.events.push({ type: 'REFRESH_TIMER', args: [timers] });
    gameLoop.timerOneSecond = 0;
  }

  // send all events
  for (var i = 0; i < gameLoop.events.length; i++) {
    // TODO: merge similar events (like ACTIVATE_COMMAND)
    var event = gameLoop.events[i];
    dispatch(event.type, ...event.args);
  }
  gameLoop.events = [];

  gameLoop.requestId = requestAnimationFrame(loop);
}

function createCommand() {
  var customerType = pick(Object.values(CUSTOMERS));
  var recipe = pick(Object.values(RECIPES));
  var command = {
    timer: 15000,
    customer: {
      name: 'random_name',
      phrase: '',
      type: customerType
    },
    recipe: recipe,
    step: 0, // 0 = shape, 1 = ingredients, 2 = decorations, 3 = finished, 4 = sent
    keys: getShapeKeys(recipe)
  }
  console.log('create new command', command);
  return command;
}

function getShapeKeys(recipe) {
  return [recipe.shape.key]
}

function getIngredientKeys(recipe) {
  var keys = [];
  recipe.ingredients.forEach(value => {
    var key = value.ingredient.key
    for (var i = 0; i < value.quantity; i++) keys.push(key);
  });
  return keys;
}

function getDecorationKeys(recipe) {
  var keys = [];
  recipe.decorations.forEach(value => {
    var key = value.decoration.key
    for (var i = 0; i < value.quantity; i++) keys.push(key);
  });
  return keys;
}

function pick(array) {
  return array[Math.random() * array.length | 0];
}


export var Game = {
  start: start,
  stop: stop
};
