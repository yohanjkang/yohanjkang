/** @type {import('tailwindcss').Config} */

import { createThemes } from "tw-colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      accent: "#59acb5",
    },
  },
};
export const plugins = [
  createThemes({
    light: {
      primary: "#fcf9f4",
      secondary: "#000000",
      accent: "#59acb5",
      "text-primary": "#000000",
    },
    dark: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#59acb5",
      "text-primary": "#ffffff",
    },
  }),
];
