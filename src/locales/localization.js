import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

let en, de, sl;

import en_common from "./en/common.json";
en = { ...en, ...en_common };
import en_auth from "./en/auth.json";
en = { ...en, ...en_auth };
import en_index from "./en/index.json";
en = { ...en, ...en_index };
import en_about from "./en/about.json";
en = { ...en, ...en_about };
import en_validation from "./en/validation.json";
en = { ...en, ...en_validation };

import de_common from "./de/common.json";
de = { ...de, ...de_common };
import de_auth from "./de/auth.json";
de = { ...de, ...de_auth };
import de_index from "./de/index.json";
de = { ...de, ...de_index };
import de_about from "./de/about.json";
de = { ...de, ...de_about };
import de_validation from "./de/validation.json";
de = { ...de, ...de_validation };

import sl_common from "./sl/common.json";
sl = { ...sl, ...sl_common };
import sl_auth from "./sl/auth.json";
sl = { ...sl, ...sl_auth };
import sl_index from "./sl/index.json";
sl = { ...sl, ...sl_index };
import sl_about from "./sl/about.json";
sl = { ...sl, ...sl_about };
import sl_validation from "./sl/validation.json";
sl = { ...sl, ...sl_validation };

import en_demo from "./en/demo.json";
en = { ...en, ...en_demo };
import de_demo from "./de/demo.json";
de = { ...de, ...de_demo };
import sl_demo from "./sl/demo.json";
sl = { ...sl, ...sl_demo };

addMessages("en", en);
addMessages("de", de);
addMessages("sl", sl);
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
