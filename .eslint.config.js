import typescriptRecommended from "@typescript-eslint/recommended";
import typescriptParser from "@typescript-eslint/parser";

export default [
  typescriptRecommended,
  {
    languageOptions: {
      parser: typescriptParser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      eslint: "eslint:recommended",
      // prettier: 'plugin:prettier/recommended',
    },
  },
];
