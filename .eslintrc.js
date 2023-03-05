module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
		"node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
		"prettier"
    ],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
    "rules": {
		"prettier/prettier": "error",
       	"arrow-body-style": "off",
       	"prefer-arrow-callback": "off",
		"@typescript-eslint/no-non-null-assertion": "off"
    }
}
