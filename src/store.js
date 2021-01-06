import { writable } from "svelte/store";

let detectedTheme = window && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
export const theme = writable(detectedTheme);

let lang = "";
lang = navigator.languages != undefined ? navigator.languages[0] : (lang = navigator.language);
export const locale = writable(lang);
