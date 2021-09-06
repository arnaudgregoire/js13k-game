export const INGREDIENTS = {
    CACHACA: {
        key: 'a',
        color: '#edfe8e',
        id: 'CACHACA'
    },
    CURACAO: {
        key: 'c',
        color: '#30b7f7',
        id: 'CURACAO'
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
    LIME_JUICE: {
        key: 'm',
        color: '#afea84',
        id: 'LIME_JUICE'
    },
    ORANGE_JUICE: {
        key: 'o',
        color: '#fc8900',
        id: 'ORANGE_JUICE'
    },
    TEQUILA: {
        key: 'q',
        color: '#f7e1ba',
        id: 'TEQUILA'
    },
    VODKA: {
        key: 'v',
        color: '#ffffff',
        id: 'VODKA'
    },
    CASSIS_CREAM: {
        key: 's',
        color: '#540017',
        id: 'CASSIS_CREAM'
    },
    TONIC: {
        key: 't',
        color: '#fcfcfc',
        id: 'TONIC'
    },
    WHITE_WHINE: {
        key: 'w',
        color: '#e3e4ad',
        id: 'WHITE_WHINE'
    }
};

export const DECORATIONS = {
    CHERRY: {
        key: 'c',
        id: 'CHERRY',
        x: -10,
        y: -16,
        w: 18,
        h: 16,
        d: 20
    },
    LEMON: {
        key: 'l',
        id: 'LEMON',
        x: -14,
        y: -11,
        w: 24,
        h: 23,
        d: 39
    },
    MINT: {
        key: 'm',
        id: 'MINT',
        x: -22,
        y: -10,
        w: 17,
        h: 10,
        d: 64
    },
    SKEWER: {
        key: 's',
        id: 'SKEWER',
        x: -10,
        y: -20,
        w: 20,
        h: 23,
        d: 0
    },
    APPLE: {
        key: 'a',
        id: 'APPLE',
        x: -20,
        y: -12,
        w: 23,
        h: 12,
        d: 81
    },
    STRAWBERRY: {
        key: 'w',
        id: 'STRAWBERRY',
        x: -7,
        y: -18,
        w: 18,
        h: 24,
        d: 104
    },
    LIME: {
        key: 'i',
        id: 'LIME',
        x: -9,
        y: -8,
        w: 18,
        h: 24,
        d: 123
    },
    STRAW: {
        key: 'r',
        id: 'STRAW',
        x: -11,
        y: -12,
        w: 19,
        h: 12,
        d: 144
    },
    CHOCOLATE: {
        key: 'o',
        id: 'CHOCOLATE',
        x: -25,
        y: -18,
        w: 19,
        h: 18,
        d: 163
    },
    CANDY: {
        key: 'y',
        id: 'CANDY',
        x: -8,
        y: -11,
        w: 17,
        h: 13,
        d: 184
    }

};

export const SHAPES = {
    BALLOON: {
        key: 'b',
        id: 'BALLOON',
        x: 33,
        y: 33,
        w: 35,
        h: 44,
        d: 0
    },
    COCKTAIL: {
        key: 'c',
        id: 'COCKTAIL',
        x: 38,
        y: 19,
        w: 38,
        h: 44,
        d: 35
    },
    OLD_FASHIONED: {
        key: 'o',
        id: 'OLD_FASHIONED',
        x: 36,
        y: 31,
        w: 37,
        h: 37,
        d: 73
    },
    TUMBLER: {
        key: 't',
        id: 'TUMBLER',
        x: 22,
        y: 45,
        w: 24,
        h: 51,
        d: 110
    }
};

export const RECIPES = {
    PINK_LADY: {
        id: 'PINK_LADY',
        name: 'The Pink Lady',
        shape: SHAPES.COCKTAIL,
        ingredients: [
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
        decorations: [
            {
                decoration: DECORATIONS.CHERRY,
                quantity: 1
            }
        ]
    },
    BLUE_LAGOON: {
        id: 'BLUE_LAGOON',
        name: 'The Blue Lagoon',
        shape: SHAPES.BALLOON,
        ingredients: [
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
        decorations: [
            {
                decoration: DECORATIONS.LEMON,
                quantity: 1
            }
        ]
    },
    CAIPIRHINA: {
        id: 'CAIPIRHINA',
        name: 'The Old Caipirhina',
        shape: SHAPES.OLD_FASHIONED,
        ingredients: [
            {
                ingredient: INGREDIENTS.LIME_JUICE,
                quantity: 4
            },
            {
                ingredient: INGREDIENTS.CACHACA,
                quantity: 4
            }
        ],
        decorations: [
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
    KIR: {
        id: 'KIR',
        name: 'The Cassis Kir',
        shape: SHAPES.BALLOON,
        ingredients: [
            {
                ingredient: INGREDIENTS.CASSIS_CREAM,
                quantity: 2
            },
            {
                ingredient: INGREDIENTS.WHITE_WHINE,
                quantity: 6
            }
        ],
        decorations: [
            {
                decoration: DECORATIONS.SKEWER,
                quantity: 1
            }
        ]
    },
    GIN_TONIC: {
        id: 'GIN_TONIC',
        name: 'The energic Gin Tonic',
        shape: SHAPES.OLD_FASHIONED,
        ingredients: [
            {
                ingredient: INGREDIENTS.GIN,
                quantity: 4
            },
            {
                ingredient: INGREDIENTS.TONIC,
                quantity: 4
            }
        ],
        decorations: [
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
    TEQUILA_SUNRISE: {
        id: 'TEQUILA_SUNRISE',
        name: 'The caribean tequila sunrise',
        shape: SHAPES.TUMBLER,
        ingredients: [
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
        decorations: [
            {
                decoration: DECORATIONS.SKEWER,
                quantity: 1
            }
        ]
    }
};

export const CUSTOMERS = {
    CRYSTAL: 'CRYSTAL',
    ENGI: 'ENGI',
    HUMAN: 'HUMAN',
    MANTIS: 'MANTIS',
    SLUG: 'SLUG',
    ROCKMAN: 'ROCKMAN',
    ZOLTAN: 'ZOLTAN',
    LANIUS: 'LANIUS'
};