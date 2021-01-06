import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en_common from "./en/common.json";
import en_auth from "./en/auth.json";
import en_index from "./en/index.json";
import en_about from "./en/about.json";

let en = {
  ...en_common,
  ...en_auth,
  ...en_index,
  ...en_about,
};

import de_common from "./de/common.json";
import de_auth from "./de/auth.json";
import de_index from "./de/index.json";
import de_about from "./de/about.json";

let de = {
  ...de_common,
  ...de_auth,
  ...de_index,
  ...de_about,
};

import sl_common from "./sl/common.json";
import sl_auth from "./sl/auth.json";
import sl_index from "./sl/index.json";
import sl_about from "./sl/about.json";

let sl = {
  ...sl_common,
  ...sl_auth,
  ...sl_index,
  ...sl_about,
};

addMessages("en", en);
addMessages("de", de);
addMessages("sl", sl);
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
