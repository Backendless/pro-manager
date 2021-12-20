module.exports = {
    'env': {
        'node'        : true,
        'browser'     : true,
        'es6'         : true,
        'jest/globals': true
    },

    'settings': {
        'react': {
            'version': 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },

    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],

    'plugins': ['jest', 'react'],

    'globals': {
        'BackendlessUI': true,
        'Backendless'  : true,
        'React'        : true,
        'ReactDOM'     : true,
        'google'       : true,
        'luxon'        : true,
    },

    'rules': {
        'global-require'       : 0,
        'no-invalid-this'      : 0,
        'react/prop-types'     : 0,
        'camelcase'            : 0,
        'require-await'        : 0,
        'prefer-const'         : 0,
        'max-lines'            : 0,
        'no-trailing-spaces'   : 0,
        'no-return-assign'     : 0,
        'array-bracket-newline': 0
    }
}
