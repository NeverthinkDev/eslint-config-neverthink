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
  plugins: ["react", "mocha", "jest", "prettier"],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    // "import/no-cycle": 0,
    // "react/prop-types": 0,
    // "function-paren-newline": 0,
    // "object-property-newline": 0,
    // "no-mixed-operators": 0,
    // "no-else-return": 0,
    // "no-trailing-spaces": 1,
    // "class-methods-use-this": 0,
    // "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    // "padded-blocks": 1,
    // "max-len": [1, { "code": 150 }],
    // "semi": 0,
    // "global-require": 0,
    // "prefer-rest-params": 0,
    // "arrow-parens": 0,
    // "arrow-body-style": [0, "as-needed"],
    // "comma-dangle": ["warn", {
    //   "objects": "always-multiline",
    //   "functions": "ignore"
    // }],
    // "object-curly-newline": 0,
    // "operator-linebreak": 0,
    // "no-console": ["warn", { "allow": ["warn", "error"] }],
    // "no-useless-constructor": "off",
    // "no-multiple-empty-lines": ["error", { "max": 1 }],
    // "react/jsx-boolean-value": 0,
    // "react/prefer-stateless-function": 0,
    // "react/jsx-wrap-multilines": 0,
    // "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    // "react/destructuring-assignment": 0,
    // "react/require-default-props": 0,
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
