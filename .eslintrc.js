/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
