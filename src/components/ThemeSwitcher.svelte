<script>
    import { theme } from "../store.js";
    import { _ } from "svelte-i18n";
    import Icon from "../components/Icon.svelte";

    function setTheme(themeParam) {
        if (themeParam === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }

    $: setTheme($theme);

    function switchTheme() {
        $theme = $theme === "dark" ? "light" : "dark";
        console.log($theme);
    }
</script>

<button on:click={switchTheme} title={$_('theme.switch.title')}>
    <Icon name="theme-light-dark" class="h-6 w-6 cursor-pointer" />
</button>
