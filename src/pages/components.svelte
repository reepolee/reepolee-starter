<script>
    import { _ } from "svelte-i18n";
    import { metatags } from "@roxi/routify";
    import { params } from "@roxi/routify";
    import DatePicker from "../components/DatePicker.svelte";
    $: metatags.title = "Kitchen sink";
</script>

<style>
    form div.field label {
        @apply pl-2;
    }
</style>

<div class="p-8">
    <p class="font-bold pb-4">{$_('components.date.description')}</p>

    <form action="#">
        <div class="field">
            <label for="date">{$_('components.date.label')}</label>
            <DatePicker id="date" />
        </div>
    </form>

    <p class="pt-24"><a href="/">{$_('goto.index')}</a></p>
    <pre>{JSON.stringify($params)}</pre>
</div>
