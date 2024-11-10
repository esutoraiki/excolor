import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        quotes: [1, "double"],

        "semi-spacing": [2, {
            before: false,
            after: true,
        }],

        semi: [1, "always"],

        "no-multi-spaces": [2, {
            exceptions: {
                Property: true,
                VariableDeclarator: true,
                ImportDeclaration: true,
            },
        }],

        "comma-spacing": [2, {
            before: false,
            after: true,
        }],

        "block-spacing": [1, "always"],
        "no-trailing-spaces": [1],
        "no-whitespace-before-property": [2],
        "space-before-blocks": [2, "always"],
        "space-in-parens": [2, "never"],

        "space-before-function-paren": [2, {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],

        "space-unary-ops": [2, {
            words: true,
            nonwords: false,
        }],

        "spaced-comment": [1, "always", {
            line: {
                exceptions: ["-", "*"],
            },

            block: {
                exceptions: ["-", "*"],
            },
        }],

        "no-spaced-func": [2],

        "keyword-spacing": [1, {
            before: true,
        }],

        "space-infix-ops": [1],
    },
}];