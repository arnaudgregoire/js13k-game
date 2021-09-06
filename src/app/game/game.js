import { CUSTOMERS, DECORATIONS, INGREDIENTS, RECIPES, SHAPES } from '../enum';

const gameState = {
    commands: [],
    activeCommand: {},
    money: 0
};

const gameLoop = {
    requestId: 0,
    then: 0,
    now: 0,
    keys: [],
    events: [],
    timerNewCommand: 0,
    timerOneSecond: 0
};

function start() {
    stop();
    window.onkeypress = (e) => { gameLoop.keys.push(e.key); };
    gameState.commands = [];
    gameState.activeCommand = {};
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
            var command = gameState.activeCommand;
            if (command) {
                command.step = 4;
                // TODO compute a score based on a 'distance' between the cocktail and the recipe
            }
        } else {
            var code = key.charCodeAt(0);
            if (code > 47 && code < 58) {
                // number
                var int = parseInt(key);
                if (int > 0 && int < 10) {
                    // update active command
                    var activeIndex = int - 1;
                    if (gameState.commands[activeIndex]) {
                        gameState.activeCommand = gameState.commands[activeIndex];
                        gameLoop.events.push({ type: 'ACTIVATE_COMMAND', args: [gameState.activeCommand] });
                    }
                }
            } else if (code > 96 && code < 123) {
                // lowercase letter
                var command = gameState.activeCommand;
                if (command.recipe) {
                    let nextStep = false;
                    switch (command.step) {
                    case 0:
                        Object.keys(SHAPES).forEach(i => {
                            if (key == SHAPES[i].key) {
                                command.shape = SHAPES[i];
                                gameLoop.events.push({ type: 'ADD_ITEM', args: [command]});
                                nextStep = true;
                            }
                        });
                        break;

                    case 1:
                        Object.keys(INGREDIENTS).forEach(i => {
                            if (key == INGREDIENTS[i].key) {
                                command.ingredients.push(INGREDIENTS[i]);
                                gameLoop.events.push({ type: 'ADD_ITEM', args: [command]});
                            }
                        });
                        if (command.ingredients.length >= 8) {
                            nextStep = true;
                        }
                        break;

                    case 2:
                        Object.keys(DECORATIONS).forEach(i => {
                            if (key == DECORATIONS[i].key) {
                                command.decorations.push(DECORATIONS[i]);
                                gameLoop.events.push({ type: 'ADD_ITEM', args: [command]});
                            }
                        });
                        if (command.decorations.length > 3) {
                            nextStep = true;
                        }
                        break;

                    case 3:
                        break;

                    case 4:
                        break;

                    default:
                        break;
                    }

                    if (nextStep) {
                        gameState.activeCommand.step += 1;
                        gameLoop.events.push({ type: 'NEXT_STEP', args: [gameState.activeCommand, gameState.commands.indexOf(gameState.activeCommand)]});
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
                gameState.commands = [
                    ...gameState.commands.slice(0, i),
                    ...gameState.commands.slice(i + 1)
                ];
                // both event could be merge for performance
                gameLoop.events.push({ type: 'REMOVE_COMMAND', args: [i] });
                gameLoop.events.push({ type: 'UPDATE_MONEY', args: [gameState.money] });
                gameLoop.events.push({ type: 'RESET', args: [] });
            } else {
                // decrease command timer
                if (command != gameState.activeCommand) {
                    command.timer -= dt;
                }
                if (command.timer <= 0) {
                    // remove command, decrease money
                    gameState.money -= 10;
                    gameState.commands = [
                        ...gameState.commands.slice(0, i),
                        ...gameState.commands.slice(i + 1)
                    ];
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
            gameLoop.events.push({ type: 'ADD_COMMAND', args: [command] });
        }
    }

    // refresh command timer
    if (gameLoop.timerOneSecond >= 1000) {
    // send refresh timer
        var timers = [];
        gameState.commands.forEach(command => {
            timers.push(command.timer);
        });
        if (timers.length != 0) {
            gameLoop.events.push({ type: 'REFRESH_TIMER', args: [timers] });
        }
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
        shape: '',
        ingredients: [],
        decorations: []
    };
    console.log('create new command', command);
    return command;
}

function pick(array) {
    return array[Math.random() * array.length | 0];
}

export var Game = {
    start: start,
    stop: stop
};
