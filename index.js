module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "prettier/babel",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react", "mocha", "jest", "prettier"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "eqeqeq": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "mocha/no-exclusive-tests": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": 2,
    "react/no-unknown-property": [2],
    "react/no-unsafe": ["error", { "checkAliases": true }],
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": [2, "always"],
    "require-atomic-updates": "off",
    "strict": ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 120,
        "semi": false
      }
    ]
  }
}
