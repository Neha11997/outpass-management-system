module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
		"plugin:react/recommanded",
		"airbnb",
		"prettier",
	],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules" : {
        //here we can change any rule "off/error/warn"
        "prettier/prettier": "error", // or warn
        // this is needed for prettier to work
        
        //example rules
        
        "no-unused-vars": "warn" // default in airbnb is error
        
        //you can disable add or remove rules based on your coding taste
        },
        
};
