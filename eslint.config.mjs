import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js, eslintPluginPrettier },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "vue/block-order": ["error", { order: ["template", "script", "style"] }],
      "vue/multi-word-component-names": ["error", { ignores: [] }],
      "vue/singleline-html-element-content-newline": [
        "off",
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
        },
      ],
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
]);
