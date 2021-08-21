export const INGREDIENTS = {
    CACHACA:{
        key:'a',
        color:'#edfe8e',
        id:'CACHACA'
    },
    CURACAO:{
        key:'c',
        color:'#30b7f7',
        id:'CURACAO'
    },
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
        key: 'l',
        color: '#eae884',
        id: 'LEMON_JUICE'
    },
    LIME_JUICE:{
        key:'m',
        color:'#afea84',
        id:'LIME_JUICE'
    },
    ORANGE_JUICE:{
        key:'o',
        color:'#fc8900',
        id:'ORANGE_JUICE'
    },
    TEQUILA:{
        key:'q',
        color:'#f7e1ba',
        id:'TEQUILA'
    },
    VODKA:{
        key:'v',
        color: '#ffffff',
        id:'VODKA'
    },
    CASSIS_CREAM:{
        key:'s',
        color:'#540017',
        id:'CASSIS_CREAM'
    },
    TONIC:{
        key:'t',
        color:'#fcfcfc',
        id:'TONIC'
    },
    WHITE_WHINE:{
        key:'w',
        color:'#e3e4ad',
        id:'WHITE_WHINE'
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
        y:66,
        w:70,
        h:88,
        d:0
    },
    COCKTAIL:{
        key: 'c',
        id:'COCKTAIL',
        x:76,
        y:38,
        w:76,
        h:88,
        d:70
    },
    OLD_FASHIONED:{
        key: 'o',
        id:'OLD_FASHIONED',
        x:72,
        y:62,
        w:74,
        h:74,
        d:146
    },
    TUMBLER:{
        key:'t',
        id:'TUMBLER',
        x:45,
        y:90,
        w:48,
        h:102,
        d:221
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
    },
    CAIPIRHINA:{
        id:'CAIPIRHINA',
        name:'The Old Caipirhina',
        shape:SHAPES.OLD_FASHIONED,
        ingredients:[
        {
            ingredient: INGREDIENTS.LIME_JUICE,
            quantity: 4
        },       
        {
            ingredient: INGREDIENTS.CACHACA,
            quantity: 4
        }
        ],
        decorations:[
            {
                decoration: DECORATIONS.LEMON,
                quantity: 1
            },
            {
                decoration: DECORATIONS.MINT,
                quantity: 1
            }
        ]
    },
    KIR:{
        id:'KIR',
        name:'The Cassis Kir',
        shape:SHAPES.BALLOON,
        ingredients:[
            {
                ingredient: INGREDIENTS.CASSIS_CREAM,
                quantity: 2
            },       
            {
                ingredient: INGREDIENTS.WHITE_WHINE,
                quantity: 6
            }
            ],
            decorations:[
                {
                    decoration: DECORATIONS.SKEWER,
                    quantity: 1
                }
        ]
    },
    GIN_TONIC:{
        id:'GIN_TONIC',
        name:'The energic Gin Tonic',
        shape:SHAPES.OLD_FASHIONED,
        ingredients:[
            {
                ingredient: INGREDIENTS.GIN,
                quantity: 4
            },       
            {
                ingredient: INGREDIENTS.TONIC,
                quantity: 4
            }
            ],
            decorations:[
                {
                    decoration: DECORATIONS.LEMON,
                    quantity: 1
                },
                {
                    decoration: DECORATIONS.MINT,
                    quantity: 1
                }
        ]
    },
    TEQUILA_SUNRISE:{
        id:'TEQUILA_SUNRISE',
        name:'The caribean tequila sunrise',
        shape: SHAPES.TUMBLER,
        ingredients:[
            {
                ingredient: INGREDIENTS.GRENADINE,
                quantity: 1
            },
            {
                ingredient: INGREDIENTS.TEQUILA,
                quantity: 2
            },
            {
                ingredient: INGREDIENTS.ORANGE_JUICE,
                quantity: 5
            }
            ],
            decorations:[
                {
                    decoration: DECORATIONS.SKEWER,
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