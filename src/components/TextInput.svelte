<script>
    import { _ } from "svelte-i18n";
    export let value;
    export let name;
</script>

<input type="text" bind:value id={name} {name} />
