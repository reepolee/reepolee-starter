<script>
  import { init, _ } from "svelte-i18n";
  import { dictionary } from "svelte-i18n";
  import { locale } from "@/store.js";
  let locales = Object.keys($dictionary);

  function setLocale(paramLocale) {
    init({
      initialLocale: paramLocale,
    });
    $locale = paramLocale;
  }
</script>

<div class="flex items-center">
  {#each locales as locale}
    <div class="cursor-pointer text-xl ml-2" on:click={() => setLocale(locale)}>
      {$dictionary[locale].flag}
    </div>
  {/each}
</div>
