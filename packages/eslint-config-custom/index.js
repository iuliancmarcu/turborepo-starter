module.exports = {
  extends: [
    "next", 
    "next/core-web-vitals", 
    "turbo", 
    "prettier",
  ],
  plugins: ["prettier", "simple-import-sort", "unused-imports", "@typescript-eslint", "tailwindcss"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@next/next/no-html-link-for-pages": "off",

    "tailwindcss/classnames-order": "error",
    
    "@typescript-eslint/consistent-type-imports": "warn",
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],

    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 80,
        "tabWidth": 2,
        "semi": true,
        "arrowParens": "avoid",
      }
    ]
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
