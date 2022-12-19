module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["import"],
  rules: {
    "no-console": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/export": "error",
    "import/no-deprecated": "warn",
    "import/no-duplicates": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "warn",
    "import/no-webpack-loader-syntax": "error",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    // "import/order": [
    //   "error",
    //   {
    //     groups: [
    //       ["builtin", "external"],
    //       "internal",
    //       "parent",
    //       "sibling",
    //       "index",
    //       "object",
    //     ],
    //     "newlines-between": "always",
    //     // distinctGroup: false,
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //     warnOnUnassignedImports: true,
    //   },
    // ],
  },
};
