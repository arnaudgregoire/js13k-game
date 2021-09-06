import { DECORATIONS, INGREDIENTS, SHAPES } from './enum';

const init = {
    timers: [],
    gold: 0,
    commands: [],
    sentence: '',
    ingredients: [],
    decorations: [],
    shape: {},
    recipe: {},
    controls: []
};

export function reducer(state = init, action, args) {
    switch (action) {
    case 'CHANGE_TIMER':
        const [timer] = args;
        return Object.assign({}, state, {
            timer: timer
        });

    case 'UPDATE_MONEY': {
        const [gold] = args;
        return Object.assign({}, state, {
            gold: gold
        });
    }

    case 'ADD_COMMAND': {
        const {commands} = state;
        const [command] = args;
        return Object.assign({}, state, {
            commands: [...commands, command]
        });
    }
    case 'REMOVE_COMMAND': {
        const {commands} = state;
        const [index] = args;
        return Object.assign({}, state, {
            commands: [
                ...commands.slice(0, index),
                ...commands.slice(index + 1)
            ]
        });
    }
    case 'REFRESH_TIMER': {
        const {commands} = state;
        const [timers] = args;
        const newCommands = [...commands];
        for (let i = 0; i < newCommands.length; i++) {
            newCommands[i].timer = timers[i];
        }
        return Object.assign({}, state, {
            commands: newCommands
        });
    }

    case 'ADD_ITEM': {
        const [activeCommand] = args;
        return Object.assign({}, state, {
            shape: activeCommand.shape,
            ingredients: activeCommand.ingredients,
            decorations: activeCommand.decorations
        });
    }

    case 'NEXT_STEP': {
        const {commands} = state;
        const [activeCommand, index] = args;
        const newCommands = [...commands];
        newCommands[index].step = activeCommand.step;
        return Object.assign({}, state, {
            controls: getControls(activeCommand.step),
            commands: newCommands
        });
    }

    case 'ACTIVATE_COMMAND': {
        const {commands} = state;
        const [activeCommand] = args;
        const newCommands = [...commands];
        newCommands.forEach(c => {
            c.selected = false;
        });

        if (activeCommand.customer) {
            newCommands[newCommands.indexOf(activeCommand)].selected = true;
            return Object.assign({}, state, {
                commands: newCommands,
                recipe: activeCommand.recipe,
                sentence: `${activeCommand.recipe.name}, please`,
                controls: getControls(activeCommand.step),
                ingredients: activeCommand.ingredients,
                shape: activeCommand.shape,
                decorations: activeCommand.decorations
            });
        }
    }

    case 'RESET': {
        return Object.assign({}, state, {
            sentence: '',
            ingredients: [],
            decorations: [],
            shape: {},
            recipe: {},
            controls: []
        });
    }

    default:
        return state;
    }
}

function getControls(step) {
    if (step == 0) return Object.keys(SHAPES);
    if (step == 1) return Object.keys(INGREDIENTS);
    if (step == 2) return Object.keys(DECORATIONS);
    return [];
}
