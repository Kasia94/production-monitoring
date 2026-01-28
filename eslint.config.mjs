import { defineConfig, globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
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

export default defineConfig([globalIgnores(["projects/**/*", "**/node_modules"]), {
    files: ["**/*.ts"],

    extends: compat.extends(
        "plugin:@angular-eslint/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            // project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
}, {
    files: ["**/*.html"],
    extends: compat.extends("plugin:@angular-eslint/template/recommended"),

    rules: {
        "prettier/prettier": "error",
        indent: "off",
        "no-tabs": "off",
    },
}]);
