import { INGREDIENTS, DECORATIONS, SHAPES, RECIPES } from './enum';

const init = {
    timer: '00:00',
    gold: 0,
    customers: [],
    sentence: '\'a green Zoltan please, im thirsty\'',
    ingredients: [],
    decorations: [],
    shape:{},
    recipe: RECIPES.BLUE_LAGOON,
    phase: SHAPES
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
        const {ingredients, decorations, shape, phase} = state;
        const [key] = args;
        if(key == "Enter"){
            return Object.assign({}, state, {
                ingredients: [],
                decorations: [],
                phase: SHAPES,
                shape:{},
                recipe: RECIPES[Object.keys(RECIPES)[Math.floor(Math.random() * Object.keys(RECIPES).length)]]
            });
        }

        if(phase == SHAPES){
            let glass;
            Object.keys(SHAPES).forEach(i => {
                if (key == SHAPES[i].key) {
                    glass = SHAPES[i];
                }
            });
            if (glass) {
                return Object.assign({}, state, {
                    shape: glass,
                    ingredients: [],
                    decorations: [],
                    phase: INGREDIENTS
                });
            }
        }

        else if(phase == INGREDIENTS){
            let ingredient;
            Object.keys(INGREDIENTS).forEach(i => {
                if (key == INGREDIENTS[i].key) {
                    ingredient = INGREDIENTS[i];
                }
            });
            if (ingredient) {
                return Object.assign({}, state, {
                    ingredients: [...ingredients, ingredient],
                    phase: ingredients.length < 7 ? INGREDIENTS: DECORATIONS
                });
            }
    
        }

        else if(phase == DECORATIONS){
            let decoration;
            Object.keys(DECORATIONS).forEach(i => {
                if (key == DECORATIONS[i].key) {
                    decoration = DECORATIONS[i];
                }
            });
            if (decoration) {
                return Object.assign({}, state, {
                    decorations: [...decorations, decoration]
                });
            }
        }
    }
    default:
        return state;
    }
}