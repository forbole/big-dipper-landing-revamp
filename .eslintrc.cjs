const path = require("node:path");

const paddingLineBetweenStatements = [
  "error",
  { blankLine: "always", next: "return", prev: "*" },
]
  .concat(
    [
      "multiline-block-like",
      "multiline-expression",
      "multiline-const",
      "const",
      "type",
      "interface",
      "if",
    ]
      .map((item) => [
        { blankLine: "always", next: "*", prev: item },
        { blankLine: "always", next: item, prev: "*" },
      ])
      .flat(),
  )
  .concat([
    {
      blankLine: "any",
      next: ["singleline-const"],
      prev: ["singleline-const"],
    },
  ]);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "@stylistic",
    "perfectionist",
    "import",
  ],
  rules: {
    "@next/next/no-img-element": "off",

    "@stylistic/padding-line-between-statements": paddingLineBetweenStatements,

    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-var-requires": "off",

    "arrow-body-style": "error",
    "camelcase": "off",
    "global-require": "off",

    "import/no-duplicates": "error",

    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",

    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-else-return": "error",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-useless-return": "error",
    "object-shorthand": "error",

    "perfectionist/sort-classes": "error",
    "perfectionist/sort-enums": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-objects": "error",
    "perfectionist/sort-union-types": "error",

    "prefer-const": "error",
    "prefer-destructuring": ["error"],
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed"],

    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/display-name": "off",
    "react/function-component-definition": "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-filename-extension": "off",
    "react/jsx-fragments": "error",
    "react/jsx-key": ["error", { warnOnDuplicates: true }],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": "error",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "off",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-prop-types": "error",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
