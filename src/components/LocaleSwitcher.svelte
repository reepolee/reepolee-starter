<script>
    import { init, _ } from "svelte-i18n";
    import { dictionary } from "svelte-i18n";
    let locales = Object.keys($dictionary);

    function setLocale(locale) {
        init({
            initialLocale: locale,
        });
    }
</script>

<div class="flex items-center">
    {#each locales as locale}
        <div
            class="cursor-pointer text-xl ml-2"
            on:click={() => setLocale(locale)}>
            {$dictionary[locale].flag}
        </div>
    {/each}
</div>
