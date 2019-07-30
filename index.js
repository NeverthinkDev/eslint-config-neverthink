module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/babel",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  plugins: [
    "react", 
    "mocha", 
    "jest", 
    "chai-friendly",
    "import",
    "prettier"
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "import/named": "error",
    "import/no-cycle": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "arrow-parens": 0,
    "arrow-body-style": [0, "as-needed"],
    "class-methods-use-this": 0,
    "eqeqeq": "error",
    "function-paren-newline": 0,
    "global-require": 0,
    "no-restricted-imports": ["error", { "paths": ["lodash"] }],
    "no-mixed-operators": 0,
    "no-else-return": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-useless-constructor": "off",
    "object-curly-newline": 0,
    "object-property-newline": 0,
    "operator-linebreak": 0,
    "prefer-rest-params": 0,
    "require-atomic-updates": "off",
    "mocha/no-exclusive-tests": "error",
    "react/jsx-boolean-value": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": 2,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/no-unknown-property": [2],
    "react/no-unsafe": ["error", { "checkAliases": true }],
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": [2, "always"],
    "react/prefer-stateless-function": 0,
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
