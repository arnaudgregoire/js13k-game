import { INGREDIENTS } from './enum';

const init = {
    timer: '00:00',
    gold: 0,
    customers: [],
    sentence: '\'a green Zoltan please, im thirsty\'',
    ingredients: [],
    decorations: [],
    recipe: {
        title: '\'The Green Zoltan\'',
        content: '2x Acanthe, 2x Qarus, 1x Fireweed'
    }
};

export default function reducer(state = init, action, args) {
    switch (action) {
    case 'CHANGE_TIMER':
        const [timer] = args;
        return Object.assign({}, state, {
            timer: timer
        });

    case 'CHANGE_GOLD': {
        const [gold] = args;
        return Object.assign({}, state, {
            gold: gold
        });
    }
    case 'ADD_CUSTOMER': {
        const {customers} = state;
        const [customer] = args;
        return Object.assign({}, state, {
            customers: [...customers, customer]
        });
    }
    case 'REMOVE_CUSTOMER': {
        const {customers} = state;
        const [index] = args;
        return Object.assign({}, state, {
            customers: [
                ...customers.slice(0, index),
                ...customers.slice(index + 1)
            ]
        });
    }
    case 'KEY_PRESSED': {
        const {ingredients} = state;
        const [keyCode] = args;
        let ingredient;
        Object.keys(INGREDIENTS).forEach(i => {
            if (keyCode == INGREDIENTS[i].key) {
                ingredient = INGREDIENTS[i];
            }
        });
        if (ingredient) {
            return Object.assign({}, state, {
                ingredients: [...ingredients, ingredient]
            });
        }
    }
    default:
        return state;
    }
}