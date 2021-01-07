<script>
    import { _ } from "svelte-i18n";
    import { metatags } from "@roxi/routify";
    import { params } from "@roxi/routify";
    import DatePickerInput from "../components/DatePickerInput.svelte";
    $: metatags.title = "Kitchen sink";

    let form = {
        date_from: new Date().toISOString().slice(0, 10),
        date_to: "2020-12-31",
    };

    function handleFormSubmit() {
        return;
        window.alert(form.date);
    }
</script>

<style>
    form div.field label {
        @apply pl-2;
    }
</style>

<div class="p-8">
    <p class="font-bold pb-4">{$_('components.date.description')}</p>

    <form on:submit|preventDefault={handleFormSubmit}>
        <div class="field">
            <label for="date_from">{$_('components.date.label')}</label>
            <DatePickerInput id="date_from" bind:dateValue={form.date_from} />
        </div>
        <div class="field">
            <label for="date_to">{$_('components.date.label')}</label>
            <DatePickerInput id="date_to" bind:dateValue={form.date_to} />
        </div>
    </form>

    <p class="pt-24"><a href="/">{$_('goto.index')}</a></p>
    <pre>{JSON.stringify($params)}</pre>
    <pre>
        {form.date_from} -         {form.date_to}
    </pre>
</div>
