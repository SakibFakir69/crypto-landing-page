import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },

  {
    rules:{
      "no-vars":"warn",
      "no-conosle":"warn",
      	"no-undef": "warn",
      
    }
  }
]);
