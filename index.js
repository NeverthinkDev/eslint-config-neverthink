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
    "arrow-parens": "off",
    "arrow-body-style": ["off", "as-needed"],
    "class-methods-use-this": "off",
    "eqeqeq": "error",
    "function-paren-newline": "off",
    "global-require": "off",
    "import/named": "error",
    "import/no-cycle": "off",
    "jest/no-alias-methods": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "mocha/no-exclusive-tests": "error",
    "no-restricted-imports": ["error", { "paths": ["lodash"] }],
    "no-mixed-operators": "off",
    "no-else-return": "off",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-useless-constructor": "off",
    "object-curly-newline": "off",
    "object-property-newline": "off",
    "operator-linebreak": "off",
    "prefer-rest-params": "off",
    "require-atomic-updates": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/no-unknown-property": ["error"],
    "react/no-unsafe": ["error", { "checkAliases": true }],
    "react/no-unused-prop-types": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "off",
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
