export const INGREDIENTS = {
    GRENADINE: {
        key: 'd',
        color: '#ff788e',
        id: 'GRENADINE'
    },
    GIN: {
        key: 'g',
        color: '#cedede',
        id: 'GIN'
    },
    LEMON_JUICE: {
        ikeyd: 'l',
        color: '#f7d341',
        id: 'LEMON_JUICE'
    },
    VODKA:{
        key:'v',
        color: '#ffffff',
        id:'VODKA'
    },
    CURACAO:{
        key:'c',
        color:'#30b7f7',
        id:'CURACAO'
    }
};

export const DECORATIONS = {
    CHERRY:{
        key: 'c',
        id: 'CHERRY',
        x:-20,
        y:-32
    },
    LEMON:{
        key: 'l',
        id: 'LEMON',
        x:-28,
        y:-22
    },
    MINT:{
        key: 'm',
        id: 'MINT',
        x:-45,
        y:-20
    },
    SKEWER:{
        key: 's',
        id: 'SKEWER',
        x:-20,
        y:-40
    }
}

export const SHAPES = {
    BALLOON:{
        key: 'b',
        id:'BALLOON',
        x:66,
        y:66
    },
    COCKTAIL:{
        key: 'c',
        id:'COCKTAIL',
        x:76,
        y:38
    },
    STANDARD:{
        key: 's',
        id:'STANDARD',
        x:72,
        y:62
    }
}

export const RECIPES = {
    PINK_LADY:{
        id: 'PINK_LADY',
        name:'The Pink Lady',
        shape:SHAPES.COCKTAIL,
        ingredients:[
        {
            ingredient: INGREDIENTS.GRENADINE,
            quantity: 3
        },       
        {
            ingredient: INGREDIENTS.GIN,
            quantity: 4
        },
        {
            ingredient: INGREDIENTS.LEMON_JUICE,
            quantity: 1
        }
        ],
        decorations:[
            {
                decoration: DECORATIONS.CHERRY,
                quantity: 1
            }
        ]
    },
    BLUE_LAGOON:{
        id: 'BLUE_LAGOON',
        name:'The Blue Lagoon',
        shape:SHAPES.BALLOON,
        ingredients:[
        {
            ingredient: INGREDIENTS.CURACAO,
            quantity: 4
        },       
        {
            ingredient: INGREDIENTS.VODKA,
            quantity: 2
        },
        {
            ingredient: INGREDIENTS.LEMON_JUICE,
            quantity: 2
        }
        ],
        decorations:[
            {
                decoration: DECORATIONS.LEMON,
                quantity: 1
            }
        ]
    }
}

export const CUSTOMERS = {
    CRYSTAL: 'CRYSTAL',
    ENGI:'ENGI',
    HUMAN:'HUMAN',
    MANTIS:'MANTIS',
    SLUG:'SLUG',
    ROCKMAN:'ROCKMAN',
    ZOLTAN:'ZOLTAN',
    LANIUS:'LANIUS'

}