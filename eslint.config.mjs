import eslint from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import pluginVitest from "@vitest/eslint-plugin"
import importX from "eslint-plugin-import-x"
import oxlint from "eslint-plugin-oxlint"
import pluginPlaywright from "eslint-plugin-playwright"
import react from "eslint-plugin-react"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import sonarQubeJs from "eslint-plugin-sonarjs"
import unicorn from "eslint-plugin-unicorn"
import typescriptEslint from "typescript-eslint"

const ignores = [
  "**/node_modules",
  "**/dist",
  ".source/*",
  ".next/*",
  "**/out",
  "**/.eslintrc.js",
  "**/public",
  "**/.coverage",
  "**/*.d.ts",
  ".github/*",
  ".eslintcache",
  "next.config.mjs",
  "postcss.config.js",
  "tailwind.config.js",
  "**/eslint.config.mjs"
]

export default typescriptEslint.config(
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname
      }
    },
    files: ["app/**/*.ts", "app/**/*.tsx", "shared/**/*.ts", "shared/**/*.tsx"],
    ignores
  },
  {
    ignores,
    plugins: {
      "@typescript-eslint": typescriptEslint.plugin,
      react,
      sonarjs: sonarQubeJs,
      "import-x": importX,
      "simple-import-sort": simpleImportSort,
      unicorn
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      // the following rules are disabled because they are covered by oxlint
      "array-callback-return": "off",
      "constructor-super": "off",
      eqeqeq: "off",
      "getter-return": "off",
      "for-direction": "off",
      "require-yield": "off",
      "use-isnan": "off",
      "valid-typeof": "off",
      "no-self-compare": "off",
      "no-empty": "off",
      "no-constant-binary-expression": "off",
      "no-constructor-return": "off",
      "no-func-assign": "off",
      "no-global-assign": "off",
      "no-ex-assign": "off",
      "no-fallthrough": "off",
      "no-irregular-whitespace": "off",
      "no-control-regex": "off",
      "no-with": "off",
      "no-debugger": "off",
      "no-const-assign": "off",
      "no-import-assign": "off",
      "no-setter-return": "off",
      "no-obj-calls": "off",
      "no-unsafe-negation": "off",
      "no-dupe-class-members": "off",
      "no-dupe-keys": "off",
      "no-this-before-super": "off",
      "no-empty-character-class": "off",
      "no-useless-catch": "off",
      "no-async-promise-executor": "off",
      "no-unreachable": "off",
      "no-duplicate-case": "off",
      "no-empty-pattern": "off",
      "no-unused-labels": "off",
      "no-sparse-arrays": "off",
      "no-delete-var": "off",
      "no-compare-neg-zero": "off",
      "no-redeclare": "off",
      "no-case-declarations": "off",
      "no-class-assign": "off",
      "no-var": "off",
      "no-self-assign": "off",
      "no-inner-declarations": "off",
      "no-dupe-else-if": "off",
      "no-invalid-regexp": "off",
      "no-unsafe-finally": "off",
      "no-prototype-builtins": "off",
      "no-shadow-restricted-names": "off",
      "no-nonoctal-decimal-escape": "off",
      "no-constant-condition": "off",
      "no-useless-escape": "off",
      "no-unsafe-optional-chaining": "off",
      "no-extra-boolean-cast": "off",
      "no-regex-spaces": "off",
      "no-undef": "off",
      "no-cond-assign": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/no-unknown-property": "off",
      "react/no-string-refs": "off",
      "react/no-direct-mutation-state": "off",
      "react/require-render-return": "off",
      "react/jsx-no-undef": "off",
      "react/jsx-no-duplicate-props": "off",
      "react/jsx-key": "off",
      "react/no-danger-with-children": "off",
      "react/no-unescaped-entities": "off",
      "react/no-is-mounted": "off",
      "react/no-find-dom-node": "off",
      "react/no-children-prop": "off",
      "react/no-render-return-value": "off",
      "react/jsx-no-target-blank": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/prop-types": "off",
      "sonarjs/no-useless-catch": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-extra-non-null-assertion": "off",
      "@typescript-eslint/no-misused-new": "off",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/prefer-as-const": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-array-constructor": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",

      // rules that are not supported by oxlint
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/dist"],
              message: "Don't import from dist",
              allowTypeImports: false
            },
            {
              group: ["**/src"],
              message: "Don't import from src",
              allowTypeImports: false
            },
            {
              group: ["@blocksuite/store"],
              message: "Import from '@blocksuite/global/utils'",
              importNames: ["assertExists", "assertEquals"]
            }
          ]
        }
      ],
      "sonarjs/no-all-duplicated-branches": "error",
      "sonarjs/no-element-overwrite": "error",
      "sonarjs/no-empty-collection": "error",
      "sonarjs/no-extra-arguments": "error",
      "sonarjs/no-identical-conditions": "error",
      "sonarjs/no-identical-expressions": "error",
      "sonarjs/no-ignored-return": "error",
      "sonarjs/no-one-iteration-loop": "error",
      "sonarjs/no-use-of-empty-return-value": "error",
      "sonarjs/non-existent-operator": "error",
      "sonarjs/no-collapsible-if": "error",
      "sonarjs/no-same-line-conditional": "error",
      "sonarjs/no-duplicated-branches": "error",
      "sonarjs/no-collection-size-mischeck": "error",
      "sonarjs/no-identical-functions": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    },
    files: ["app/**/*.ts", "app/**/*.tsx", "shared/**/*.ts", "shared/**/*.tsx"]
  },
  {
    ignores,
    ...pluginVitest.configs.recommended,
    files: ["app/**/__tests__/*", "shared/**/__tests__/*", "modules/**/__tests__/*"]
  },
  {
    ignores,
    ...pluginPlaywright.configs["flat/recommended"],
    files: ["e2e/**/*.{test,spec}.{js,ts,jsx,tsx}"]
  },
  // markdown.configs.recommended,
  oxlint.configs["flat/recommended"]
)
