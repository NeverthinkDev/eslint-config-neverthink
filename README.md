# eslint-config-neverthink
Eslint rules enabling Prettier


## Prettier

### VSCode

Install Eslint and Prettier extensions.

Add the following settings to VSCode settings.json. (On Mac: Press `CMD + ,`, and click the curly braces `{}` icon in the top right corner.)

```
  "eslint.autoFixOnSave": true,
  "prettier.eslintIntegration": true,
  // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": [
    "javascript",
    "javascriptreact"
  ],
```

### JetBrains Idea, WebStorm, ...

Instructions: https://prettier.io/docs/en/webstorm.html
