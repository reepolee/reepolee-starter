import { writable } from "svelte/store";

let detectedTheme = window && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
export const theme = writable(detectedTheme);
